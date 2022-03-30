import {
    Button,
    HStack,
    IconButton,
    Image,
    Text,
    VStack
  } from '@chakra-ui/react';
import { Dash,Plus } from 'react-bootstrap-icons';
import CreditAmount from '../reusable/CreditAmount';

const CartDrawerCard = ({item,modifyCart}) => (
    <HStack w='100%' align='start' justify='space-between'>
        <HStack align='start'>
            {/* item image */}
            <Image src={item.image} boxSize='75' borderRadius='md' bg='gray.200' alt='Product'/>

            {/* item name, quantity change buttons */}
            <VStack align='start'>
                <Text>{item.name}</Text>
                <HStack>
                    {/* Decrese Quantity */}
                    <IconButton 
                        icon={<Dash size={25} />} 
                        aria-label='decrease quantity' 
                        onClick={()=> modifyCart(item,'subtract')} 
                    />

                    {/* Quantity */}
                    <Text data-testid='itemQuantity'>{item.quantity}</Text>

                    {/* Increase Quantity */}
                    <IconButton 
                        icon={<Plus size={25} />} 
                        aria-label='increase quantity'
                        onClick={()=> modifyCart(item,'add')} 
                    />
                </HStack>
            </VStack>
        </HStack>
        
        {/* Total/Remove button */}
        <VStack align='end' justify='space-between' minH='75px'>
            <CreditAmount amount={item.total} />
            <Button 
                onClick={ ()=> modifyCart(item,'remove') } 
                variant='link' 
                color='blue'
                >Remove
            </Button>
        </VStack>
      
    </HStack>
)

export default CartDrawerCard;