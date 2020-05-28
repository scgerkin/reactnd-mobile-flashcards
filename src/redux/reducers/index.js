import {ADD_DECK, ADD_QUESTION, RECEIVE_DECKS} from "../actions";


function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS: return handleReceiveDecks(state, action);
    case ADD_DECK: return handleAddDeck(state, action);
    case ADD_QUESTION: return handleAddQuestion(state, action);
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

function handleAddQuestion(state, action) {
  return {
    ...state,
    [action.key]: state[action.key].questions.concat([action.question])
  }
}

export default decks;
