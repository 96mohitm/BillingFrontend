import React, { useEffect } from 'react'
import { getBillingList } from './actions'
import { useSelector, useDispatch } from 'react-redux';
import { selectBilling } from './reducer';


const BillingList = () => {
  const dispatch = useDispatch();
  const billingList = useSelector(selectBilling);

  useEffect(() => {
    getBillingList(dispatch);
    // eslint-disable-next-line
  }, [])

  const getTableBody = () => {
    return (
      billingList.map((bill, index) => {
        return (
        <tr key={index}>
          <td><a href={`/invoice?id=${bill.id}`}>#{bill.id}</a></td>
          <td>{bill.created_ts}</td>
          <td>{bill.customer_name}</td>
          <td>{bill.contact}</td>
        </tr>
        );
      })
    );
  }

  const refreshHandler = () => {
    getBillingList(dispatch);
  }


  return (
    <div>
        <button type="button" className="btn btn-primary" onClick={() => refreshHandler()}>Refresh</button>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Created Date</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {getTableBody()}
        </tbody>
        </table>
    </div>
  )
}

export default BillingList;
