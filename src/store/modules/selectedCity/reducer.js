const selectedCityReducer = (city = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "@selectedCity":
      return (city = action.city);
    default:
      return city;
  }
};
export default selectedCityReducer;
