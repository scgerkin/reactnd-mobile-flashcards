import {
  ADD_DECK,
  ADD_QUESTION,
  MARK_ANSWER,
  RECEIVE_DECKS,
  RESET_QUIZ,
} from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return handleReceiveDecks(state, action);
    case ADD_DECK:
      return handleAddDeck(state, action);
    case ADD_QUESTION:
      return handleAddQuestion(state, action);
    case MARK_ANSWER:
      return handleMarkAnswer(state, action);
    case RESET_QUIZ:
      return handleResetQuiz(state, action);
    default:
      return state;
  }
}

function handleReceiveDecks(state, action) {
  return {
    ...state,
    ...action.decks,
  };
}

function handleAddDeck(state, action) {
  const {deck} = action;
  const {decks} = state;
  return {
    decks: {
      ...decks,
      [deck.id]: {
        ...deck,
      },
    },
  };
}

function handleAddQuestion(state, action) {
  const {deckId, question} = action;
  const {decks} = state;
  const deck = decks[deckId];
  return {
    decks: {
      ...decks,
      [deckId]: {
        ...deck,
        questions: deck.questions.concat([question]),
      },
    },
  };
}

function handleMarkAnswer(state, action) {
  const {deckId, questionId, correct} = action;
  const {decks} = state;
  const deck = decks[deckId];

  if (correct) {
    return {
      ...state,
      decks: {
        ...state.decks,
        [deckId]: {
          ...deck,
          correct: deck.correct.concat([questionId]),
        },
      },
    };
  } else {
    return {
      ...state,
      decks: {
        ...state.decks,
        [deckId]: {
          ...deck,
          incorrect: deck.incorrect.concat([questionId]),
        },
      },
    };
  }
}

function handleResetQuiz(state, action) {
  const {deckId} = action;
  const {decks} = state;
  const deck = decks[deckId];

  return {
    ...state,
    decks: {
      ...state.decks,
      [deckId]: {
        ...deck,
        correct: [],
        incorrect: [],
      },
    },
  };
}

export default decks;
