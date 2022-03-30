import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Center,Flex,useDisclosure } from '@chakra-ui/react';
import CheckoutForm from './CheckoutForm';
import OrderReviewPane from './OrderReviewPane';
import CheckoutModal from './CheckoutModal';


const CheckoutPage = ({cart,modifyCart,clearCart}) => {

  //state
  const [shipping, setShipping] = useState(400);
  const [submitErr,setSubmitErr] = useState({ 
    display: 'none',
    title: '',
    msg:''
  });

  //hooks
  const navigate = useNavigate();
  const {isOpen,onOpen,onClose} = useDisclosure();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isDirty, isSubmitting },
  } = useForm()

  //handle submit
  const onSubmit = async data => {

    // show data
    console.log({
      ...data,
      shippingCost: shipping === '400' ? 'standard' : 'lightspeed',
      cart: cart
    });

    // fake async fetch
    await new Promise(resolve => {
      setTimeout(() => {
          resolve();
      }, 3000);
    });
 
    //show sub
    // setSubmitErr({
    //   display: 'flex',
    //   title: 'Payment Failed', // or System Error
    //   msg: 'Your card was declined.' //Please try again later.
    // })

    //open success modal
    onOpen();
  }

  //after modal confirmation,clear cart and re-route
  const startOver = () => {
    clearCart();
    navigate('/');
  }

  return (
    <Center>
      <Flex flexDir={['column','row']}>

        {/* Checkout Form */}
        <CheckoutForm 
          register={register} 
          control={control} 
          errors={errors} 
          setShipping={setShipping}
        />

        {/* Order Review Pane */}
        <OrderReviewPane 
          cart={cart} 
          modifyCart={modifyCart}
          shippingCost={shipping} 
          isDirty={isDirty}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting} 
          submitErr={submitErr}
          setSubmitErr={setSubmitErr}
        />
      </Flex>

      {/* Post-Submit Modal */}
      <CheckoutModal isOpen={isOpen} onClose={onClose} onConfirm={startOver} />
    </Center>
    
    
  )
}

export default CheckoutPage