import React, { useState } from 'react'
import InventoryList from '../components/inventory/InventoryList'
import { Button, Modal, ModalHeader } from 'reactstrap';
import AddInventoryForm from '../components/inventory/AddInventoryForm';

const InventoryPage = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <h3>Inventory Page</h3>
      <Button onClick={toggle}>
        Add Inventory
      </Button>
      <InventoryList />
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <AddInventoryForm modalToggle={toggle} />
      </Modal>
    </div>
  )
}

// InventoryPage.propTypes = {

// }

export default InventoryPage