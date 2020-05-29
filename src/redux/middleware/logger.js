import {RECEIVE_DECKS} from "../actions";

const logger = (store) => (next) => (action) => {
  console.log("------------------------------ACTION------------------------------")
  console.log(new Date().toLocaleTimeString())
  console.log("------------------------------------------------------------------")
  if (action.type === RECEIVE_DECKS) {
    console.log("Received initial data");
  } else {
    console.log(action);
  }
  const returnValue = next(action);
  console.log("----------------------------NEW STATE-----------------------------")
  const {decks} = store.getState();
  console.log(decks["TESTDECK"]);
  console.log("------------------------------------------------------------------")
  return returnValue;
}

export default logger;
