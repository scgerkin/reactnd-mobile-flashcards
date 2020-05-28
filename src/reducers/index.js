import {ADD_DECK, RECEIVE_DECKS} from "../actions";


function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS: return handleReceiveDecks(state, action);
    case ADD_DECK: return handleAddDeck(state, action);
    default: return state;
  }
}

function handleReceiveDecks(state, action) {
  return {
    ...state,
    ...action.decks
  }
}

function handleAddDeck(state, action) {
  return {
    ...state,
    [action.deck]: action.deck
  }
}

export default decks;
