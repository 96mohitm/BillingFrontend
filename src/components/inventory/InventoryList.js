import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectInventory } from './reducer';
import { getInventoryList } from './actions';


const InventoryList = () => {
  const dispatch = useDispatch();
  const inventoryList = useSelector(selectInventory);

  useEffect(() => {
    getInventoryList(dispatch);
  // eslint-disable-next-line
  }, []);

  const refreshHandler = () => {
    getInventoryList(dispatch);
  };

  const getTableBody = () => {
    return (
      inventoryList.map((inventory, index) => {
        return (
        <tr key={index}>
          <td>{inventory.id}</td>
          <td>{inventory.product_id}</td>
          <td>{inventory.batch_id}</td>
          <td>{inventory.created_dt}</td>
          <td>{inventory.quantity}</td>
          <td>{inventory.price_per_quantity}</td>
        </tr>
        );
      })
    );
  }

  return (
    <div>
        <button type="button" className="btn btn-primary" onClick={() => refreshHandler()}>Refresh</button>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product Id</th>
            <th scope="col">Batch Id</th>
            <th scope="col">Created Date</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price Per Quantity</th>
          </tr>
        </thead>
        <tbody>
          {getTableBody()}
        </tbody>
        </table>


    </div>
  )
}

export default InventoryList