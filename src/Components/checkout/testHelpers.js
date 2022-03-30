import { BrowserRouter as Router } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';

//test helper functions
export const renderCart = () => (
    {
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
)

export const renderPage = (modifyCart,cart = {},clearCart) => (
    <Router>
        <CheckoutPage
            cart={cart}
            modifyCart={modifyCart}
            clearCart={clearCart}
        />
    </Router>
)

export const getInputs = screen => (
    {
        shippingName: screen.getAllByLabelText('Full Name')[0],
        shippingAddress: screen.getByLabelText('Street Address'),
        shippingCity: screen.getByLabelText('City'),
        shippingPlanet: screen.getByLabelText('Planet'),
        buyerName: screen.getAllByLabelText('Full Name')[1],
        cardNum: screen.getByLabelText('Credit Card Number'),
        cardExpire: screen.getByLabelText('Expiration Date'),
        securityCode: screen.getByLabelText('Security Code')
    }
)

export const enterInputs = (userEvent,inputs) => {
    userEvent.type(inputs.shippingName,'fName lName');
    userEvent.type(inputs.shippingAddress,'12345 fake street');
    userEvent.type(inputs.shippingCity,'fake city');
    userEvent.type(inputs.shippingPlanet,'mars');
    userEvent.type(inputs.buyerName,'fName lName');
    userEvent.type(inputs.cardNum,'4444 4444 4444 4444');
    userEvent.type(inputs.cardExpire,'11/22');
    userEvent.type(inputs.securityCode,'123');
}