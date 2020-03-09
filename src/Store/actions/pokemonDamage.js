import * as actionTypes from "./actionTypes";
import axios from "../../Share/axios";

export const setDamageInfo = info => {
  //   console.log(info[0]);
  const uniqueSet1 = new Set(info[0]);
  const uniqueSet2 = new Set(info[1]);
  const doubleUpdate = [...uniqueSet1];
  const halfUpdate = [...uniqueSet2];
  return {
    type: actionTypes.ADD_DAMAGE,
    damageDouble: doubleUpdate,
    damageHalf: halfUpdate
  };
};

export const initDamageInfo = type => {
  return async dispatch => {
    // const { firstData } = await axios.get(`type/${type[0].type.name}`);
    console.log(type);
    if (typeof type === "undefined") {
      console.log("Caught undefined promise, please wait!");
    } else {
      const firstData = await axios.get(`type/${type[0].type.name}`);
      let secondData = {};
      if (type[1]) {
        secondData = await axios.get(`type/${type[1].type.name}`);
      }
      const firstDoubelDamage = [];
      firstDoubelDamage.push(
        firstData.data.damage_relations.double_damage_from
      );
      const firstHalfDamage = [];
      firstHalfDamage.push(firstData.data.damage_relations.half_damage_from);
      const secondDoubleDamage = [];
      const secondHalfDamage = [];
      if (Object.keys(secondData).length !== 0) {
        secondDoubleDamage.push(
          secondData.data.damage_relations.double_damage_from
        );
        secondHalfDamage.push(
          secondData.data.damage_relations.half_damage_from
        );
      }
      let doubleDamage = [];
      let halfDamage = [];
      firstDoubelDamage[0].map(p => doubleDamage.push(p.name));
      firstHalfDamage[0].map(p => halfDamage.push(p.name));
      if (secondDoubleDamage.length !== 0 && secondHalfDamage.length !== 0) {
        secondHalfDamage[0].map(p => halfDamage.push(p.name));
        secondDoubleDamage[0].map(p => doubleDamage.push(p.name));
      }
      // console.log(firstDoubelDamage[1]);
      // console.log(doubleDamage);
      // console.log(halfDamage);
      const dispatchData = [];
      dispatchData.push(doubleDamage, halfDamage);
      // console.log(dispatchData);
      dispatch(setDamageInfo(dispatchData));
    }
  };
};
