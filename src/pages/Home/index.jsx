import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompButton from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import CompSelect from "../../components/Select";
import api from "../../service";
import { selectCity } from "../../store/modules/citys/actions";
import { stateSelected } from "../../store/modules/states/actions";

const Home = () => {
  const [stateName, setStateName] = useState(null);
  const [cityName, setCityName] = useState("");
  const states = useSelector(({ states }) => states);
  const citys = useSelector(({ citys }) => citys);
  const handleState = (event) => {
    setStateName(event.target.value);
  };

  const dispatch = useDispatch();

  const listStates = () => {
    api
      .get("estados", {})
      .then((response) => {
        dispatch(stateSelected(response.data));
      })
      .catch((err) => console.log(err));
  };
  console.log(stateName);
  const listCitys = () => {
    if (stateName != null) {
      api
        .get(`estados/${stateName}/municipios/`, {})
        .then((response) => {
          dispatch(selectCity(response.data));
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    listCitys();
    listStates();
  }, []);

  console.log(stateName);
  console.log(citys);
  return (
    <Flex width="100%" flexDirection="column">
      <Header />
      <Flex justifyContent="space-around">
        <Box
          display="flex"
          flexDirection="column"
          width="45%"
          border="2px solid #f3f3f3"
          padding="5px"
          borderRadius="5px"
          alignItems="center"
        >
          <CompSelect text={"Selecione um Estado"} onChange={handleState}>
            {states.map((item, i) => {
              return (
                <option key={i} value={item.sigla}>
                  {item.nome} - {item.sigla}
                </option>
              );
            })}
          </CompSelect>

          <CompSelect text={"Selecione uma Cidade"}>
            {citys?.map((item, i) => {
              return <option key={i}>{item.nome}</option>;
            })}
          </CompSelect>
        </Box>
        <Box
          width="45%"
          border="2px solid #f3f3f3"
          padding="5px"
          borderRadius="5px"
        >
          <Card />
        </Box>
      </Flex>
    </Flex>
  );
};
export default Home;
