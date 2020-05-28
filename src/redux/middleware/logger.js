
const logger = (store) => (next) => (action) => {
  console.log("------------------------------ACTION------------------------------")
  console.log(new Date().toLocaleTimeString())
  console.log("------------------------------------------------------------------")
  console.log(action);
  const returnValue = next(action);
  console.log("----------------------------NEW STATE-----------------------------")
  console.log(store.getState());
  console.log("------------------------------------------------------------------")
  return returnValue;
}

export default logger;
