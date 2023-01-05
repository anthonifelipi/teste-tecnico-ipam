import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../service";
import { stateSelected } from "../store/modules/states/actions";

const useStates = () => {
  const dispatch = useDispatch();
  const states = useSelector(({ states }) => states);

  const listStates = () => {
    api
      .get("estados", {})
      .then((response) => {
        dispatch(stateSelected(response.data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    listStates();
  }, []);

  return { states };
};
export default useStates;
