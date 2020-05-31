import {saveState} from "../../utils/api";
import {RECEIVE_DECKS} from "../actions";

const storage = (store) => (next) => (action) => {
  const returnValue = next(action);
  if (action.type !== RECEIVE_DECKS) {
    const {decks} = store.getState();
    saveState(decks);
  }
  return returnValue;
}

export default storage;
