import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../service";
import { selectCity } from "../store/modules/citys/actions";

const useCitys = ({ uf }) => {

  const dispatch = useDispatch();
  const citys = useSelector(({ citys }) => citys);

  const listCitys = () => {
    if (uf == "") {
      return;
    }
    api
      .get(`estados/${uf}/municipios/`, {})
      .then((response) => {
        dispatch(selectCity(response.data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    listCitys();
  }, [uf]);

  return { citys };
};
export default useCitys;
