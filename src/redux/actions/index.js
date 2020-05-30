import {fetchDecks} from "../../utils/api";
import {generateUID} from "../../utils/helpers";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_QUESTION = "ADD_QUESTION";
export const MARK_ANSWER = "MARK_ANSWER";
export const RESET_QUIZ = "RESET_QUIZ";


export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

// todo hook into api
export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

// todo hook into api
export function addQuestion(deckId, question, answer) {

  const questionItem = {
    id: generateUID(),
    question: question,
    answer: answer
  }

  return {
    type: ADD_QUESTION,
    deckId,
    question: questionItem
  }
}

export function handleInitialData() {
  return (dispatch) => {
    return dispatch(receiveDecks(fetchDecks()))
  }
}

export function markAnswer({deckId, questionId, correct}) {
  return {
    type: MARK_ANSWER,
    deckId,
    questionId,
    correct
  }
}

export function resetQuiz(deckId) {
  return {
    type: RESET_QUIZ,
    deckId
  }
}
