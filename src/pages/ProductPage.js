import React, { useState } from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import CreateProductForm from '../components/product/CreateProductForm';
import ProductList from '../components/product/ProductList';


const ProductPage = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
    <h3>  Product Page </h3>
    <Button onClick={toggle}>
        Add Product
    </Button>
    <ProductList />
    <Modal isOpen={modal}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <CreateProductForm modalToggle={toggle} />
    </Modal>
    </div>
  )
}

export default ProductPage;
