import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import CompButton from "../../components/Button";
import Header from "../../components/Header";
import CompSelect from "../../components/Select";
import api from "../../service";

const Home = () => {
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
          <CompSelect placeholder="Selecione um estado" />
        </Box>
        <Box
          width="45%"
          border="2px solid #f3f3f3"
          padding="5px"
          borderRadius="5px"
        >
          Aqui vai ficar os resultados!!
        </Box>
      </Flex>
    </Flex>
  );
};
export default Home;
