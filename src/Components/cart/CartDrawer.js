import { useRef } from 'react'
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import CartDrawerCard from './CartDrawerCard';
import CreditAmount from '../reusable/CreditAmount';
import { BoxSeam } from 'react-bootstrap-icons';

const CartDrawer = ({
  isOpen,
  onClose,
  cart,
  numItems,
  modifyCart
}) => {

  //focus on proceed to checkout button initially
  const firstFocus = useRef();

  //navigate hook for routing
  const navigate = useNavigate();

  //re-route and close drawer on proceed to checkout
  const handleRouteChange = () => {
    navigate('/star-wars-store/checkout');
    onClose()
  }

  //map cart items
  const mappedCartItems = cart.items.map( (item,i) =>
    <CartDrawerCard item={item} key={i} modifyCart={modifyCart} /> 
  )

  return (
    <Drawer 
      initialFocusRef={firstFocus}
      isOpen={isOpen} 
      onClose={onClose} 
      placement='right'
      returnFocusOnClose='false'
      size='sm'
    >
      <DrawerOverlay backdropFilter='blur(5px)'/>
      <DrawerContent>

        {/* Close Button */}
        <DrawerCloseButton />

        {/* Header */}
        <DrawerHeader>Shopping Cart (
          {numItems} Item{numItems === 1 ? null : 's'}
        )</DrawerHeader>

        {/* Content */}
        <DrawerBody>
          <VStack spacing='7'>
            {mappedCartItems}
          </VStack>
        </DrawerBody>

        {/* Footer */}
        <DrawerFooter flexDir='column'>
          <Divider m='2'/>

          {/* Subtotal */}
          <HStack justify='space-between' w='100%' m='2'>
            <Heading size='med'>Subtotal:</Heading>
            <CreditAmount amount={cart.subtotal}/>
          </HStack>

          {/* Shipping Info */}
          <HStack color='gray.600' w='100%' m='2' align='start'>
            <BoxSeam size='25' />
            <Text>Shipping and taxes calculated at checkout.</Text>
          </HStack>
          
          
          <Button 
            onClick={handleRouteChange} 
            ref={firstFocus} 
            isDisabled={cart.subtotal > 0 ? false : true}
            colorScheme='blue'
            w={['100%', '300px']}
            m='2'
          >
            Proceed to Checkout
          </Button>
        </DrawerFooter>

      </DrawerContent>
    </Drawer>
  )
}

export default CartDrawer;

