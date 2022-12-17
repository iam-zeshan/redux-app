import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./state/index";
import { bindActionCreators } from "redux";

export const Shop = () => {
  let balance = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <>
      <div className="container my-3">
        <h2>Deposit/Withdraw</h2>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withdrawMoney(10);
          }}
        >
          -
        </button>
        Update Balance ({balance})
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            depositMoney(10);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};
