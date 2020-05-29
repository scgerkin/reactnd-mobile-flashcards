
const logger = (store) => (next) => (action) => {
  console.log("------------------------------ACTION------------------------------")
  console.log(new Date().toLocaleTimeString())
  console.log("------------------------------------------------------------------")
  console.log(action);
  const returnValue = next(action);
  console.log("----------------------------NEW STATE-----------------------------")
  const {decks} = store.getState();
  console.log(decks["TESTDECK"]);
  console.log("------------------------------------------------------------------")
  return returnValue;
}

export default logger;
