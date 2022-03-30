import React from 'react';
import { 
  Center,
  Circle,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import image from '../images/empire-logo.png';
import { Cart2 } from 'react-bootstrap-icons';

const Header = ({openCart,cartCount}) => {
  
  const countBadge = (
    <Circle 
      size='25px' 
      bg='#D70B0B' 
      color='white' 
      pos='absolute' 
      bottom='0' 
      right='0' 
      m='-10px'
    >{cartCount}</Circle>
  )

  return(
    <Center mb='10'>
      <HStack align={['start','center']} justify='space-between' p='4' w='100%' maxW='1200px'>

        {/* Header Branding */}
        <Link as={RouterLink} to='/' _hover={{textDecoration: 'none'}}>
          <HStack align='start'>

            {/* Logo */}
            <Image
              boxSize='40px' 
              src={image}
              alt='Empire Ships' 
              mt='1'
            />

            {/* Heading Text */}
            <VStack align='flex-start' spacing='0'>
              <Heading fontSize='20'>Empire Ships</Heading>
              <Text>Fastest in the Galaxy</Text>
            </VStack>

          </HStack>
        </Link>
          
        
        {/* Cart Button */}
        <Center pos='relative'>
          <IconButton 
            onClick={openCart} 
            icon={<Cart2 size='30' fill='#3182CE'/>} 
            width='50px'
            height='50px'
            borderRadius='full'
            pb='1'
            aria-label='Show Cart Button'
          />

          {/* Items Count Badge */}
          {
            cartCount  ? countBadge : null
          }
        </Center>
        
      </HStack> 
    </Center>
  )
}

export default Header