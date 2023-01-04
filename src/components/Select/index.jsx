import { Select } from "@chakra-ui/react";
import { useState } from "react";
import api from "../../service";

const CompSelect = ({ text, value, onChange, children }) => {
  return (
    <Select
      placeholder={text}
      onChange={onChange}
      value={value}
      margin="15px 0px"
    >
      {children}
    </Select>
  );
};
export default CompSelect;
