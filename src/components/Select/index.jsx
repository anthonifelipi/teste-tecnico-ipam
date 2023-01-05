import { Select } from "@chakra-ui/react";

const CompSelect = ({ text, value, onChange, children }) => {
  return (
    <Select
      placeholder={text}
      onChange={onChange}
      value={value}
      margin="15px 0px"
      bg={"#59C58E"}
    >
      {children}
    </Select>
  );
};
export default CompSelect;
