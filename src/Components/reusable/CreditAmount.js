import React from 'react';
import creditImg from '../../images/credit-symbol.webp'; 
import { Image,Text } from '@chakra-ui/react';

const CreditAmount = ({amount,fontWeight}) => (
    <Text fontWeight={fontWeight}>
        <Image boxSize='12px' src={creditImg} alt='Credit' display='inline' mb='0.5px' />
        {/* Round Decimal then format */}
        {
            amount > 0 
                ?(Math.round(amount * 100)/100).toLocaleString('en-us')
                : 0
        }
    
    </Text>
)
    

export default CreditAmount