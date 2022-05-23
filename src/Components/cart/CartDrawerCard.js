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
    <VStack 
        w='100%' 
        align='start'
        justify='space-between' 
        p='2' 
        bg={['gray.100','none']} 
        mt={0}
    >
        <HStack w='100%' justify='space-between'>
            {/* Name */}
            <Text maxW='60%' fontWeight='bold'>{item.name}</Text>

            {/*Total*/}
            <CreditAmount amount={item.total} />
        </HStack>
        
        <HStack w='100%' justify='space-between'>
            {/* item image */}
            <Image 
                src={item.image} 
                boxSize='75' 
                borderRadius='md' 
                bg='gray.200' 
                alt='Product'
                w='120px'
            />
            <VStack>
                {/* Quantity Buttons */}
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

                {/* Remove Button */}
                <Button 
                    onClick={ ()=> modifyCart(item,'remove') } 
                    variant='link' 
                    color='blue'
                    >Remove
                </Button>
            </VStack>
        </HStack>
    </VStack>
)

export default CartDrawerCard;