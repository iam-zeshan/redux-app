import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "./state/index";
// import { bindActionCreators } from "redux";

export const Shop = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="container my-3">
        <h2>Deposit/Withdraw</h2>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(actionCreators.withdrawMoney(10));
          }}
        >
          -
        </button>
        Update Balance
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(actionCreators.depositMoney(10));
          }}
        >
          +
        </button>
      </div>
    </>
  );
};
