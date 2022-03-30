import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
  } from '@chakra-ui/react';

const ProductModal = ({
  isOpen,
  onClose,
  title,
  footerBtn,
  size,
  children
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={size}>
        <ModalOverlay backdropFilter='blur(5px)'/>
        <ModalContent> 
            {/* Header */}
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />

            {/* Modal Body */}
            <ModalBody p='3'> 
                {children}
            </ModalBody>

            <ModalFooter>
              {footerBtn}
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default ProductModal