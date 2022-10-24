import React, { useState } from 'react'
import axios from "axios";
import { localhostURL } from '../../constants';

const CreateProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productUnit, setProductUnit] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const requestData = {
      "name": productName,
      "description": productDescription,
      "unit": productUnit,
    };

    const createProductPath = 'product';
    axios.post(localhostURL + createProductPath, requestData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };


  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={submitHandler}>
        <div class="mb-3">
          <label for="productName" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
            value={productName} onChange={(e) => {setProductName(e.target.value)}} />
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea type="textarea" class="form-control" id="exampleInputPassword1" 
          value={productDescription} onChange={(e) => {setProductDescription(e.target.value)}}/>
        </div>
        <div class="mb-3">
          {/* TODO: use this to send the data in api call. */}
          <label for="productUnit" class="form-label">Unit</label>
          <select class="form-select" aria-label="Default select example" value={productUnit} onChange={(event) => setProductUnit(event.target.value)}>
            <option value="open this select" selected>Open this select menu</option>
            <option value="Pices">Pices</option>
            <option value="Weight">Weight</option>
            <option value="Volumn">Volumn</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CreateProductForm;