import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import Header from "../../components/Header";
import CompSelect from "../../components/Select";
import useCitys from "../../hooks/useCitys";
import useSelectedCity from "../../hooks/useCitySelected";
import useStates from "../../hooks/useStates";

const Home = () => {
  const dispatch = useDispatch();

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const { city } = useSelectedCity({ idCity: selectedCity });
  const { citys } = useCitys({ uf: selectedState });
  const { states } = useStates();

  const handleState = (event) => {
    setSelectedState(event.target.value);
  };
  const handleCity = (event) => {
    setSelectedCity(event.target.value);
  };

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
          <CompSelect
            text={"Selecione um Estado"}
            value={selectedState}
            onChange={handleState}
          >
            {states.map((item, i) => {
              return (
                <option key={i} value={item.sigla}>
                  {item.nome} - {item.sigla}
                </option>
              );
            })}
          </CompSelect>

          <CompSelect
            text={"Selecione uma Cidade"}
            value={selectedCity}
            onChange={handleCity}
          >
            {citys?.map((item, i) => {
              return (
                <option value={item.id} key={i}>
                  {item.nome}
                </option>
              );
            })}
          </CompSelect>
        </Box>
        <Box
          width="45%"
          border="2px solid #f3f3f3"
          padding="5px"
          borderRadius="5px"
        >
          <Card
            city={city?.nome}
            microrregiao={city?.microrregiao?.nome}
            mesorregiao={city?.microrregiao?.mesorregiao?.nome}
            uf={city?.microrregiao?.mesorregiao?.UF?.sigla}
            ufSigla={city?.microrregiao?.mesorregiao?.UF?.nome}
            regiao={city?.microrregiao?.mesorregiao?.UF?.regiao.nome}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
export default Home;
