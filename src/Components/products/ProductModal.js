import React from 'react';
import {
    Button,
    Heading,
    Image,
    Text,
    VStack,
    Wrap,
  } from '@chakra-ui/react';
  import CreditAmount from '../reusable/CreditAmount';
  import Modal from '../reusable/Modal';

const ProductModal = ({isOpen,onClose,product,modifyCart}) => {

  const footerBtn = 
    <Button 
      onClick={ () => modifyCart(product,'add')} 
      colorScheme='blue' 
      data-testid='modalAddBtn'
      w={['100%','auto']}
    >Add to Cart</Button>

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='4xl' footerBtn={footerBtn} title='View Product'>
      <Wrap justify='space-evenly'>
        <Image 
          src={product.image}  
          w={['90%','300px']}
          h={['','200px']}
          borderRadius='5px' 
          bg='gray.200' 
          alt={product.name}
          mb='50px'
        />
        <VStack w={['','40%']} align='start'>
          <Heading size='lg' w='100%'>{product.name}</Heading>
          <CreditAmount amount={product.price} />
          <Text>{product.description}</Text>
        </VStack>
        </Wrap>
    </Modal>
  )
}

export default ProductModal