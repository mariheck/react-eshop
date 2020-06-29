import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51GvShADmZyjxmUfhnufFoWf2Ry5edtafaUIlw3HKY43sXN2Ft9IBQ214VqW3o28cE0ezbw05zKmcDYfNhdod1Gkj00kCCwhXZM';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                alert('Payment successful');
            })
            .catch(error => {
                console.log('Payment error :', JSON.parse(error));
                alert(
                    "There was an issue with your payment. Please make sure you're using the provided payment card."
                );
            });
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="REACT E-Shop"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
