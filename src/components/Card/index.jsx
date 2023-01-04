import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import api from "../../service";

const Card = ({ city, microrregiao, mesorregiao, uf, ufSigla, regiao }) => {
  //   microrregião, mesorregião, UF e região do município. Utilizar a api:
  return (
    <Flex flexDirection="column">
      <Box textAlign="center" borderBottom="1px solid #c3c3c3" margin="20px">
        <Text fontSize="24px">
          <b> Cidade: {city}</b>
        </Text>
      </Box>
      <Box borderBottom="1px solid #c3c3c3" margin="10px">
        <Text fontSize="18px" textAlign="center">
          <b> Microrregião</b>
        </Text>
        <Text margin="5px">
          <b>Nome</b>: {microrregiao}
        </Text>
      </Box>
      <Box borderBottom="1px solid #c3c3c3" margin="10px">
        <Text fontSize="18px" textAlign="center">
          <b> Mesorregião</b>
        </Text>
        <Text margin="5px">
          <b>Nome</b>: {mesorregiao}
        </Text>
      </Box>
      <Box borderBottom="1px solid #c3c3c3" margin="10px">
        <Text fontSize="18px" textAlign="center">
          <b> UF</b>
        </Text>
        <Box display="flex">
          <Text margin="5px">
            <b> Sigla</b>: {uf}
          </Text>
        </Box>
        <Box display="flex">
          <Text margin="5px">
            <b>Nome</b>: {ufSigla}
          </Text>
        </Box>
      </Box>
      <Box margin="10px">
        <Text fontSize="18px" textAlign="center">
          <b> Região</b>
        </Text>
        <Text margin="5px">
          <b>Nome</b>: {regiao}
        </Text>
      </Box>
    </Flex>
  );
};
export default Card;
