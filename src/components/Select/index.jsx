import { Select } from "@chakra-ui/react";
import { useState } from "react";
import api from "../../service";

const CompSelect = ({ text, value, children }) => {
  const [states, setStates] = useState([]);
  const [stateSelected, setStateSelected] = useState();
  const [statesName, setStatesName] = useState([]);

  const listStates = () => {
    api
      .get("", {})
      .then((response) => {
        setStates(response.data);
      })
      .catch((err) => console.log(err));
  };
  //   listStates();
  console.log(states);
  return (
    <Select placeholder={text} margin="15px 0px">
      {states.map((item, i) => {
        return (
          <option key={i} value={item.nome}>
            {" "}
            {item.nome}{" "}
          </option>
        );
      })}
    </Select>
  );
};
export default CompSelect;
