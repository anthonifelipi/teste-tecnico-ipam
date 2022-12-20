import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import CompSelect from "./components/Select";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
