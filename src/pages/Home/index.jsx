import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import CompSelect from "../../components/Select";
import useCitys from "../../hooks/useCitys";
import useSelectedCity from "../../hooks/useCitySelected";
import useStates from "../../hooks/useStates";

const Home = () => {
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
    <Flex width="100%" flexDirection="column" height={"100vh"}>
      <Header />
      <Flex
        justifyContent="space-around"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "stretch" }}
      >
        <Box
          margin={{ base: "10px", md: "0px" }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          bgColor="#f5efef"
          width="25%"
          minWidth="350px"
          border="2px solid #00a651"
          height="30vh"
          padding="15px"
          borderRadius="5px"
          alignItems="center"
        >
          <Box>
            <Text color={"#00a651"}>Faça Sua Busca Aqui!</Text>
          </Box>
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
          width="35%"
          minWidth="350px"
          border="1px solid #00a651 "
          margin={{ base: "10px", md: "0px" }}
          borderRadius="5px"
        >
          <Card
            city={city?.nome}
            microrregiao={city?.microrregiao?.nome}
            mesorregiao={city?.microrregiao?.mesorregiao?.nome}
            uf={city?.microrregiao?.mesorregiao?.UF?.nome}
            ufSigla={city?.microrregiao?.mesorregiao?.UF?.sigla}
            regiao={city?.microrregiao?.mesorregiao?.UF?.regiao.nome}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
export default Home;
