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
  if (action.type !== RECEIVE_DECKS) {
    console.log("----------------------------NEW STATE-----------------------------")
    console.log(store.getState());
  }
  console.log("------------------------------------------------------------------")
  return returnValue;
}

export default logger;
