import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import App from './App';
import ErrorBoundary from './ErrorBoundary';


describe('App Rendering', ()=> {
    it('renders the app', ()=> {
        const app = render(
            <Router>
                <App />
            </Router>
        );
    
        //open cart
        
    })
    
    it('displays error boundary when an error is thrown', () => {
        const ThrowErr = () => {
            throw new Error('You have error ID10T');
        }

       const spy = jest.spyOn(console, 'error');
       spy.mockImplementation(()=> null);
    
        render(
            <ErrorBoundary fallback>
                <ThrowErr />  
            </ErrorBoundary>
        )

        expect(screen.getByText(/Something went wrong./i)).toBeInTheDocument();
    })
})


describe('Cart Helper Functions', ()=> {

})

