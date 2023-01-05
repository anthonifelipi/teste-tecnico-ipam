import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <Flex
      bgGradient="linear(to-r,#ffffff, #00a651  )"
      borderBottom="1px solid #CEEEDE"
      height="100px"
      marginBottom="15px"
    >
      <Box height="100%" display="flex" alignItems="center" margin="0px 10px">
        <Image borderRadius="5px" height="90px" src={logo} alt="logo da IPAM" />
      </Box>
    </Flex>
  );
};
export default Header;
