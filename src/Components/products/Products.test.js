import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductGrid from './ProductGrid';

describe('product grid', ()=> {
    it('renders product grid', () => {
        render(<ProductGrid />)
        expect(screen.getAllByText('View Item')[0]).toBeInTheDocument()
    });

    it('calls modify cart function after clicking add to cart', ()=> {
        const modifyCart = jest.fn()
        render(<ProductGrid modifyCart={modifyCart}/>)

        const addBtn = screen.getAllByText(/add to cart/i)[0]

        userEvent.click(addBtn);

        expect(modifyCart).toHaveBeenCalled();
    })

    it('opens a modal after clicking view item button', ()=> {
        render(<ProductGrid />)

        const viewItemBtn = screen.getAllByText(/view item/i)[0]
        userEvent.click(viewItemBtn)

        const productModal = screen.getByText('View Product');
        
        expect(productModal).toBeInTheDocument();
    })

    it('calls modify cart function after clicking add to cart in modal', ()=> {
        const modifyCart = jest.fn();

        render(<ProductGrid modifyCart={modifyCart}/>)

        //click view item button
        const viewItemBtn = screen.getAllByText(/view item/i)[0]
        userEvent.click(viewItemBtn)


        //click add to cart in modal
        const addBtn = screen.getByTestId('modalAddBtn');

        userEvent.click(addBtn);

        expect(modifyCart).toHaveBeenCalled();
    })
})

