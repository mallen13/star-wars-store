import { 
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button,
    CloseButton,
    Divider,
    Heading,
    HStack,
    Text,
    VStack
} from '@chakra-ui/react';
import CreditAmount from '../reusable/CreditAmount';
import CartDrawerCard from '../cart/CartDrawerCard';

const OrderReviewPane = ({ 
    cart,
    modifyCart,
    shippingCost,
    isDirty,
    handleSubmit,
    onSubmit,
    isSubmitting,
    submitErr,
    setSubmitErr
}) => (
    <VStack
        w={['100%','400px']} 
        minH={[null,'calc(100vh - 122px)']}
        align='center' 
        bg={[null,'#F3FBFF']} 
        p='5'
        >

        {/* Header */}
        <Heading size='med' w='100%' textAlign={['left','center']}>Order Summary</Heading>

        {/* Items */}
        <VStack w='100%' maxH='400px' overflow='auto' spacing='7'>
        {cart.items.map( (item,i) => <CartDrawerCard item={item} key={i} modifyCart={modifyCart} /> )}
        </VStack>

        {/* Cost Breakdown */}
        <Divider/>
        <HStack justify='space-between' w='100%'>
            <Text>Subtotal:</Text>
            <CreditAmount amount={cart.subtotal}/>
        </HStack>

        <HStack justify='space-between' w='100%'>
            <Text>Shipping Cost:</Text>
            <CreditAmount amount={ cart.subtotal > 0 ? shippingCost : 0}/>
        </HStack>

        <HStack justify='space-between' w='100%'>
            <Text>Tax:</Text>
            <CreditAmount amount={ cart.subtotal > 0 ? cart.subtotal * 0.10 : 0}/>
        </HStack>

        {/* Total */}
        <Divider />
        <HStack justify='space-between' w='100%'>
            <Heading size='med'>Order Total:</Heading>
            <CreditAmount amount={ cart.subtotal > 0 ? (cart.subtotal + parseInt(shippingCost)) * 1.10 : 0}/>
        </HStack>

        {/* Submit Button */}
        <Button 
            onClick={handleSubmit(onSubmit)}
            colorScheme='blue'
            isDisabled={ cart.subtotal > 0 && isDirty ? false : true}
            isLoading={isSubmitting}
            loadingText='Processing'
            w='90%'
        >Place Order
        </Button>

        {/* Err Alert */}
        <Alert status='error' flexDir='row' display={submitErr.display}>

            {/* Icon */}
            <AlertIcon />

            {/* Title/ Description */}
            <VStack align='start' spacing='0'>
                <AlertTitle>{submitErr.title}</AlertTitle>
                <AlertDescription>{submitErr.msg}</AlertDescription>
            </VStack>

            {/* Close Button */}
            <CloseButton 
                position='absolute' 
                right='8px' 
                top='8px' 
                onClick={ ()=> setSubmitErr({...submitErr, display: 'none'})}
            />
        </Alert>
    </VStack>
)

export default OrderReviewPane