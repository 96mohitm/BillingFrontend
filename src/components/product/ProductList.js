import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProductList } from "./actions";
import { selectProduct } from "./reducer";

const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProduct);

  useEffect(() => {
    getProductList(dispatch);
  // eslint-disable-next-line
  }, []);

  const refreshHandler = () => {
    getProductList(dispatch);
  };

  const getTableBody = () => {
    return (
      productList.map((product, index) => {
        return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.created_ts}</td>
          <td>{product.unit}</td>
        </tr>
        );
      })
    );
  };

  return (
    <div>
        <h2>Product List</h2>
        <button type="button" class="btn btn-primary" onClick={() => refreshHandler()}>Refresh</button>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Created Date</th>
            <th scope="col">Unit</th>
          </tr>
        </thead>
        <tbody>
          {getTableBody()}
        </tbody>
        </table>
    </div>
  )
}

export default ProductList