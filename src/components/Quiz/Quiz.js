import React from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import {btnIncorrect, btnSuccess} from "../../styles/buttons";
import Button from "../Shared/Button";
import NoteCard from "./NoteCard";
import {shuffle} from "../../utils/helpers";
import {markAnswer} from "../../redux/actions";

class Quiz extends React.Component {
  state = {
    deckId: "",
    cardsInDeck: 0,
    currentCardNumber: 0,
    deckQuestionStack: [],
    currentQuestion: {id: "", question: "", answer: ""},
  };

  componentDidMount() {
    const {deckId, cardsInDeck, currentCardNumber, deckQuestionStack, currentQuestion} = this.props;

    this.setState(({
      deckId,
      cardsInDeck,
      currentCardNumber,
      deckQuestionStack,
      currentQuestion,
    }));
  }

  onMarkAnswer = (correct) => {
    const {deckId, currentQuestion} = this.state;
    const {dispatch} = this.props;
    const questionId = currentQuestion.id;
    dispatch(markAnswer({deckId, questionId, correct}));
    this.setState((prev) => {
      const unanswered = prev.deckQuestionStack.filter(
          q => q.id !== currentQuestion.id);
      return {
        deckQuestionStack: unanswered,
        currentCardNumber: prev.currentCardNumber + 1,
        currentQuestion: unanswered.length > 0 ? unanswered[0] : null,
      };
    });
  };

  render() {
    const {currentCardNumber, cardsInDeck, currentQuestion} = this.state;

    if (currentCardNumber === cardsInDeck + 1) { //todo make component with results
      return (
          <View><Text>End of quiz</Text></View>
      );
    } else if (currentCardNumber <= 0) { //todo make component for this
      return (
          <View><Text>No cards in this deck.</Text></View>
      );
    } else {
      return (
          <View>
            <Text>Current Card: {currentCardNumber}</Text>
            <Text>Cards in Deck: {cardsInDeck}</Text>
            <NoteCard
                question={currentQuestion.question}
                answer={currentQuestion.answer}
            />
            <Button
                style={btnSuccess}
                text={"Correct"}
                onPressEvent={() => this.onMarkAnswer(true)}
            />
            <Button
                style={btnIncorrect}
                text={"Incorrect"}
                onPressEvent={() => this.onMarkAnswer(false)}
            />
          </View>
      );
    }
  }
}

function mapStateToProps({decks}, {deckId}) {
  if (!decks) {
    return {
      cardsInDeck: 0,
      currentCardNumber: 0,
      deckQuestionStack: [],
      currentQuestion: {id: "", question: "", answer: ""},
    };
  }

  const deck = decks[deckId];
  const unanswered = shuffle(getUnansweredQuestions(deck));
  return {
    deck: deck,
    deckId: deckId,
    cardsInDeck: deck.questions.length,
    currentCardNumber: deck.questions.length > 0 ? 1 : 0,
    deckQuestionStack: unanswered,
    currentQuestion: unanswered.length > 0 ? unanswered[0] : null,
  };
}

function getUnansweredQuestions(deck) {
  return deck.questions.filter(question => {
    return !(deck.correct.includes(question.id) ||
        deck.incorrect.includes(question.id));
  });
}

export default connect(mapStateToProps)(Quiz);
