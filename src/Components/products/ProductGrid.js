import { useState } from 'react';
import ships from '../../ships';
import {
  Button,
  Center,
  Heading,
  Image,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import CreditAmount from '../reusable/CreditAmount';
import ProductModal from './ProductModal';

const ProductGrid = ({modifyCart}) => {

  //state
  const [modalProduct,setModalProduct] = useState({name: '', description: '', price: 0});

  //product modal
  const {isOpen,onOpen,onClose} = useDisclosure();

  //set modal product an open
  const openModal = product => {
    setModalProduct(product)
    onOpen()
  }

  //map ships
  const mappedProducts = ships.map( (product,i) => (
    <WrapItem key={i} flexDir='column' w='250px'>
      <Image src={product.image} w='250px' h='150px' borderRadius='md' alt={product.name} bg='gray.300' />
      <Text>{product.name}</Text>
      <CreditAmount amount={product.price} />
      <Button 
        onClick={ ()=> modifyCart(product,'add') } 
        mt='2' 
        mb='3' 
        colorScheme='blue'
        w={['100%','auto']}
      >Add to Cart</Button>
      <Button onClick={ ()=> openModal(product) } variant='link' w={['100%','auto']}>View Item</Button>
    </WrapItem>
  ))

  return (
    <>
      <Heading size='lg' align='center' mb={['0','10']}>Star Ships</Heading>

      {/* Products */}
      <Center w='100%' p='3'>
        <Wrap w='100%' maxW='1120px' justify={['center','start']} spacing='10'>
          {mappedProducts}
        </Wrap>
      </Center>

      {/* Product Details Modal */}
      <ProductModal 
        isOpen={isOpen} 
        onClose={onClose}
        product={modalProduct}
        modifyCart={modifyCart}
      />
    </>
    
  )
}

export default ProductGrid;