import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price} ) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51J3OSPSEIKYk1Ky3OhSiYsAsoK6y9nQcFFqtQwH6ctCD1W8Ai3ajm7LB6DJCKeRRMe7MbR1ZAI0CJIhzV2OSOLfU00FY2CftNs'

const onToken = token => {
    console.log(token);
    alert("payment succesful")
}


return(
    <StripeCheckout 
        label=" Pay Now"
        name="ClothZen"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey ={ publishableKey}
    />
)
};

export default StripeCheckoutButton;