import { Box, Flex, Text } from "@chakra-ui/react";

const Card = ({ city, microrregiao, mesorregiao, ufSigla, uf, regiao }) => {
  return (
    <Flex
      minWidth="330px"
      flexDirection="column"
      fontFamily={"Inter"}
      bgColor="#f5efef"
    >
      <Box
        textAlign="center"
        borderBottom="1px solid #c3c3c3"
        bgColor="#00a651"
        boxSize={"auto"}
      >
        <Text margin="8px" color="#FFF" fontSize="2em">
          <b> Cidade: {city}</b>
        </Text>
      </Box>
      <Box
        flexDirection="column"
        borderBottom="1px solid #c3c3c3"
        display="flex"
        padding="0% 5%"
      >
        <Text margin="8px" fontSize="24px" color="#00a651">
          <b> Microrregião</b>
        </Text>
        <Text
          padding="0px 5px"
          margin="5px"
          marginBottom="16px"
          bgColor="#FFF"
          width="100%"
          borderRadius="5px"
          fontSize="20px"
        >
          {microrregiao}
        </Text>
      </Box>
      <Box
        flexDirection="column"
        borderBottom="1px solid #c3c3c3"
        display="flex"
        padding="0% 5%"
      >
        <Text margin="8px" fontSize="24px" color="#00a651">
          <b> Mesorregião</b>
        </Text>
        <Text
          padding="0px 5px"
          margin="5px"
          marginBottom="16px"
          bgColor="#FFF"
          width="100%"
          borderRadius="5px"
          fontSize="20px"
        >
          {mesorregiao}
        </Text>
      </Box>
      <Box
        flexDirection="column"
        borderBottom="1px solid #c3c3c3"
        display="flex"
        padding="0% 5%"
      >
        <Text margin=" 8px" fontSize="24px" color="#00a651">
          <b> UF</b>
        </Text>
        <Box display="flex">
          <Text
            padding="0px 5px"
            margin="5px"
            bgColor="#FFF"
            marginBottom="15px"
            width="100%"
            borderRadius="5px"
            fontSize="20px"
          >
            {uf}
          </Text>
          <Text
            padding="0px 5px"
            margin="5px"
            bgColor="#FFF"
            marginBottom="15px"
            width="100%"
            borderRadius="5px"
            fontSize="20px"
          >
            {ufSigla}
          </Text>
        </Box>
      </Box>
      <Box flexDirection="column" display="flex" margin="0% 5%">
        <Text margin=" 8px" fontSize="24px" color="#00a651">
          <b> Região</b>
        </Text>
        <Text
          padding="0px 5px"
          margin="10px 5px"
          marginBottom="25px"
          bgColor="#FFF"
          width="100%"
          borderRadius="5px"
          fontSize="20px"
        >
          {regiao}
        </Text>
      </Box>
    </Flex>
  );
};
export default Card;
