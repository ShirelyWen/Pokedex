import * as actionTypes from "./actionTypes";
import axios from "../../Share/axios";
import { conditionalExpression } from "@babel/types";

export const setFilterInfo = info => {
  return {
    type: actionTypes.ADD_BASCIS,
    id: info.id,
    name: info.name
  };
};

export const initFilterInfo = inputValue => {
  console.log("inputValue");
  return async dispatch => {
    console.log(inputValue);
    const { data } = await axios.get(`pokemon/?limit=151`);
    let filterData = [];

    dispatch(setFilterInfo(data));
  };
};
