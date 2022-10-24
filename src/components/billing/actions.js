import BillingService from "./BillingService";

export const GET_BILLING = "billing/getall";

export const getBillingList = async (dispatch) => {
  try {
    const res = await BillingService.getAll();
    dispatch({
      type: GET_BILLING,
      payload: res.data.orders,
    });
  } catch (err) {
    console.log(err);
  }
};
