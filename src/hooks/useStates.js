import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../service";

const useStates = () => {
  const dispatch = useDispatch()
  const [states, setStates] = useState([]);

  const listStates = () => {
    api
      .get("estados", {})
      .then((response) => {
        setStates(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    listStates();
  }, []);

  return states;
};
export default useStates;
