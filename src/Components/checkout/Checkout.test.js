import { render, screen, shallow, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { 
    renderCart, 
    renderPage, 
    getInputs, 
    enterInputs
} from './testHelpers';
import OrderReviewPane from './OrderReviewPane';

beforeEach( ()=> jest.useFakeTimers() )
afterEach( ()=> {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
})

describe('Checkout Page', ()=> {

    describe('Input Form', () => {
        it('submit button is disabled when inputs are untouched', ()=> {
            const cart = renderCart();
            render(renderPage(undefined,cart,undefined))
    
            const submitBtn = screen.getByText('Place Order')
            userEvent.click(submitBtn);
    
            expect(submitBtn).toBeDisabled();
        })
    
        it('changes shipping cost when selecting other shipping option', ()=> {
            const cart = renderCart();
            render(renderPage(undefined,cart,undefined))
    
            //shipping buttons
            const fastShippingBtn = screen.getByText('Lightspeed');
    
            //changes shipping butts
            userEvent.click(fastShippingBtn);
    
            //shipping cost display
            const shippingCostDisplay = screen.getAllByText('700')[1]
            expect(shippingCostDisplay).toBeInTheDocument();
        })
    
        it('submits when all inputs are filled properly', async () => {
            //setup
            const cart = renderCart();
            render(renderPage(undefined,cart,undefined))
    
            //enters inputs
            const inputs = getInputs(screen);
            enterInputs(userEvent,inputs);
    
            //submits
            const submitBtn = screen.getByText('Place Order')
            userEvent.click(submitBtn);
    
            //advance timers / expect modal to display
            await waitFor( ()=> {
                expect(screen.getByText(/transaction complete/i)).toBeInTheDocument();
            }, {timeout: 10000})
        });
    
        it('calls clearCart function after clicking done button', async () => {
            //setup
            const cart = renderCart();
            const clearCart = jest.fn();
            render( renderPage( undefined,cart,clearCart ) )
    
            //enters inputs
            const inputs = getInputs(screen);
            enterInputs(userEvent,inputs);
    
            //submits
            const submitBtn = screen.getByText('Place Order')
            userEvent.click(submitBtn);
    
            //advance timers / expect modal to display
            await waitFor( ()=> {
                expect(screen.queryByText(/done/i)).toBeInTheDocument();
            }, {timeout: 10000})
    
            //click done button
            const doneBtn = screen.getByText(/done/i);
            userEvent.click(doneBtn);
    
            //expect function call
            expect(clearCart).toHaveBeenCalled();
        });
    
        it('shows required error if there is an input error', async ()=> {
             //setup
             const cart = renderCart();
             render( renderPage(undefined,cart,undefined) )
     
             //dirties form so submit button enabled
             const inputs = getInputs(screen);
             userEvent.type(inputs.shippingName,'fName lName')
     
             //submit button
             const submitBtn = screen.getByText('Place Order')
             userEvent.click(submitBtn);
    
             //advance timers / expect Required message to display on all fields
            await waitFor( ()=> {
                expect(screen.queryAllByText('Required')[0]).toBeInTheDocument();
            }, {timeout: 10000})
        });
    })
    
    describe('Order Summary Pane', () => {
        it('increases quantity when hitting the plus button', ()=> {
            //render
            const modifyCart = jest.fn( ()=> {
                cart.items= [{
                    name: 'item1',
                    quantity: 2,
                    price: 400,
                    total: 800
                }]
                cart.numItems = 2
                cart.subtotal = 800
            });
            const cart = {
                items: [
                    {
                        name: 'item1',
                        price: 400,
                        quantity: 1,
                        total: 400
                    }
                ],
                numItems: 1,
                subtotal: 400,
            }
            const { rerender } = render(renderPage(modifyCart,cart,undefined));
    
            //quantity of 2 not in document
            expect(screen.queryByText('2')).not.toBeInTheDocument();

            //quantity button
            const button = screen.getByLabelText('increase quantity');
            userEvent.click(button);

            //re-render component
            rerender(renderPage(modifyCart,cart,undefined))
        
            //expects quantity to change
            expect(screen.queryByText('2')).toBeInTheDocument();
        })
        it('decreases quantity when hitting minus button (if at least one item remains)', ()=> {
            ///render
            const modifyCart = jest.fn( ()=> {
                cart.items= [{
                    name: 'item1',
                    quantity: 1,
                    price: 400,
                    total: 400
                }]
                cart.numItems = 1
                cart.subtotal = 400
            });
            const cart = {
                items: [
                    {
                        name: 'item1',
                        price: 400,
                        quantity: 2,
                        total: 800
                    }
                ],
                numItems: 2,
                subtotal: 800,
            }
            const { rerender } = render(renderPage(modifyCart,cart,undefined));
    
            //quantity of 1 not in document
            expect(screen.queryByText('1')).not.toBeInTheDocument();

            //quantity button
            const button = screen.getByLabelText('decrease quantity');
            userEvent.click(button);

            //re-render component
            rerender(renderPage(modifyCart,cart,undefined))
        
            //expects quantity to change
            expect(screen.queryByText('1')).toBeInTheDocument();
        })
        it('removes an item when hitting minus button (if quantity is zero', ()=> {
            ///render
            const modifyCart = jest.fn( ()=> {
                cart.items= []
                cart.numItems = 0
                cart.subtotal = 0
            });
            const cart = {
                items: [
                    {
                        name: 'item1',
                        price: 400,
                        quantity: 1,
                        total: 100
                    }
                ],
                numItems: 1,
                subtotal: 400,
            }
            const { rerender } = render(renderPage(modifyCart,cart,undefined));

            //remove button
            const button = screen.getByLabelText('decrease quantity');
            userEvent.click(button);

            //re-render component
            rerender(renderPage(modifyCart,cart,undefined))
        
            //no items, so no remove button
            expect(screen.queryByLabelText('decrease quantity')).not.toBeInTheDocument();
        })
        it('removes an item when hitting the remove button', ()=> {
            ///render
            const modifyCart = jest.fn( ()=> {
                cart.items= []
                cart.numItems = 0
                cart.subtotal = 0
            });
            const cart = {
                items: [
                    {
                        name: 'item1',
                        price: 400,
                        quantity: 1,
                        total: 100
                    }
                ],
                numItems: 1,
                subtotal: 400,
            }
            const { rerender } = render(renderPage(modifyCart,cart,undefined));

            //remove button
            const button = screen.getByText('Remove');
            userEvent.click(button);

            //re-render component
            rerender(renderPage(modifyCart,cart,undefined))
        
            //no items, so no remove button
            expect(screen.queryByText('Remove')).not.toBeInTheDocument();
        });
        it('disables submit button when subtotal is zero', ()=> {
             ///render
             const modifyCart = jest.fn( ()=> {
                cart.items= []
                cart.numItems = 0
                cart.subtotal = 0
            });
            const cart = {
                items: [
                    {
                        name: 'item1',
                        price: 400,
                        quantity: 1,
                        total: 100
                    }
                ],
                numItems: 1,
                subtotal: 400,
            }
            const { rerender } = render(renderPage(modifyCart,cart,undefined));

            //remove button
            const button = screen.getByText('Remove');
            userEvent.click(button);

            //re-render component
            rerender(renderPage(modifyCart,cart,undefined))
        
            //remove button disabled
            expect(screen.getByText('Place Order')).toBeDisabled();
        });
        it('shows error alert and can be closed', ()=> {
            //setup
            const cart = renderCart();
            const submitErr = {
                display: 'flex',
                title: 'Error Title',
                msg: 'Error Message'
            }
            const setSubmitErr = jest.fn();
            render(
                <OrderReviewPane 
                    submitErr={submitErr}
                    modifyCart={null}
                    cart={cart}
                    isDirty={true}
                    handleSubmit={jest.fn()}
                    onSubmit={null}
                    isSubmitting={false}
                    setSubmitErr={setSubmitErr}
                />
            );

            //close err btn
            const closeErrBtn = screen.getByLabelText('Close');
            userEvent.click(closeErrBtn);

            expect(setSubmitErr).toHaveBeenCalled();
        })
    })
})