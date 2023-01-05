import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../service";
import { selectedCityAction } from "../store/modules/selectedCity/actions";

const useSelectedCity = ({ idCity }) => {
  const dispatch = useDispatch();
  const city = useSelector(({ city }) => city);

  const selectedCity = () => {
    if (idCity == "") {
      return;
    }
    api
      .get(`municipios/${idCity}`, {})
      .then((response) => {
        dispatch(selectedCityAction(response.data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    selectedCity();
  }, [idCity]);

  return { city };
};
export default useSelectedCity;
