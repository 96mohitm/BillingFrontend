import axios from 'axios';
import React, { useState } from 'react';
import { localhostURL } from '../../constants';
import { useDispatch } from 'react-redux';
import { getInventoryList } from './actions';


const AddInventoryForm = ({
  modalToggle
}) => {
  const [productId, setProductId] = useState("");
  const [batchId, setBatchId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [pricePerQuantity, setPricePerQuantity] = useState(0.0);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const requestData = {
      "product_id": productId,
      "batch_id": batchId,
      "quantity": quantity,
      "price_per_quantity": pricePerQuantity,
    };
    const addInventoryPath = '';
    axios.post(localhostURL + addInventoryPath, requestData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        modalToggle();
        getInventoryList(dispatch);
      })
  };

  return (
    <div>
        <h2>Add Inventory</h2>
        <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="productId" class="form-label">Product Id</label>
          <input type="text" class="form-control" aria-describedby="emailHelp" 
            value={productId} onChange={(e) => {setProductId(e.target.value)}} />
        </div>
        <div class="mb-3">
          <label class="form-label">Batch Id</label>
          <input type="text" class="form-control" id="exampleInputPassword1" 
          value={batchId} onChange={(e) => {setBatchId(e.target.value)}}/>
        </div>
        <div class="mb-3">
          <label class="form-label">Quantity</label>
          <input type="text" class="form-control" id="exampleInputPassword1" 
          value={quantity} onChange={(e) => {setQuantity(e.target.value)}}/>
        </div>
        <div class="mb-3">
          <label class="form-label">Price Per Quantity</label>
          <input type="text" class="form-control" id="exampleInputPassword1" 
          value={pricePerQuantity} onChange={(e) => {setPricePerQuantity(e.target.value)}}/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        
    </div>
  )
}

export default AddInventoryForm;