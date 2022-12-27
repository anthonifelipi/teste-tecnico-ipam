import { Select } from "@chakra-ui/react";
import { useState } from "react";
import api from "../../service";

const CompSelect = ({ option, value, children }) => {
  return (
    <Select option={option} value={value} margin="15px 0px">
      {children}
    </Select>
  );
};
export default CompSelect;
