import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import api from "../../service";

const Card = () => {
  const [states, setStates] = useState([]);
  const [stateSelected, setStateSelected] = useState();
  const [statesName, setStatesName] = useState([]);

  const listStates = () => {
    api
      .get("municipios/curitiba", {})
      .then((response) => {
        setStates(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    listStates();
  }, []);
  //   microrregião, mesorregião, UF e região do município. Utilizar a api:
  return (
    <Flex flexDirection="column">
      <Box textAlign="center" borderBottom="1px solid #c3c3c3" margin="20px">
        <Text fontSize="24px">
          <b> Cidade: {states?.nome}</b>
        </Text>
      </Box>
      <Box borderBottom="1px solid #c3c3c3" margin="10px">
        <Text fontSize="18px" textAlign="center">
          <b> Microrregião</b>
        </Text>
        <Text margin="5px">
          <b>Nome</b>: {states.microrregiao?.nome}
        </Text>
      </Box>
      <Box borderBottom="1px solid #c3c3c3" margin="10px">
        <Text fontSize="18px" textAlign="center">
          <b> Mesorregião</b>
        </Text>
        <Text margin="5px">
          <b>Nome</b>: {states?.microrregiao?.mesorregiao?.nome}
        </Text>
      </Box>
      <Box borderBottom="1px solid #c3c3c3" margin="10px">
        <Text fontSize="18px" textAlign="center">
          <b> UF</b>
        </Text>
        <Box display="flex">
          <Text margin="5px">
            <b> Sigla</b>: {states?.microrregiao?.mesorregiao?.UF?.sigla}
          </Text>
        </Box>
        <Box display="flex">
          <Text margin="5px">
            <b>Nome</b>: {states?.microrregiao?.mesorregiao?.UF?.nome}
          </Text>
        </Box>
      </Box>
      <Box margin="10px">
        <Text fontSize="18px" textAlign="center">
          <b> Região</b>
        </Text>
        <Text margin="5px">
          <b>Nome</b>: {states?.microrregiao?.mesorregiao?.UF?.regiao.nome}
        </Text>
      </Box>
    </Flex>
  );
};
export default Card;
