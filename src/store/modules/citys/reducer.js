const cityReducer = (citys = [], action) => {
  console.log(action);
  switch (action.type) {
    case "@citys":
      return (citys = action.citys);
    default:
      return citys;
  }
};
export default cityReducer;
