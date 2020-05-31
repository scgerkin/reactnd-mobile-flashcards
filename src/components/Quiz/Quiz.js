import React from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import {btnIncorrect, btnSuccess} from "../../styles/buttons";
import DefaultButton from "../Buttons/DefaultButton";
import NoteCard from "./NoteCard";
import {shuffle} from "../../utils/helpers";
import {markAnswer} from "../../redux/actions";
import QuizResults from "./QuizResults";

class Quiz extends React.Component {
  state = {
    currentCardNumber: 0,
    deckQuestionStack: [],
    currentQuestion: {id: "", question: "", answer: ""},
  };

  componentDidMount() {
    const {currentCardNumber, deckQuestionStack, currentQuestion} = this.props;

    this.setState(({
      currentCardNumber,
      deckQuestionStack,
      currentQuestion,
    }));
  }

  onMarkAnswer = (correct) => {
    const {currentQuestion} = this.state;
    const {deckId, dispatch} = this.props;
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
    const {currentCardNumber, currentQuestion} = this.state;
    const {cardsInDeck, deckId} = this.props;

    if (currentCardNumber === cardsInDeck + 1) { //todo make component with results
      return (
          <QuizResults deckId={deckId}/>
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
            <DefaultButton
                style={btnSuccess}
                text={"Correct"}
                onPressEvent={() => this.onMarkAnswer(true)}
            />
            <DefaultButton
                style={btnIncorrect}
                text={"Incorrect"}
                onPressEvent={() => this.onMarkAnswer(false)}
            />
          </View>
      );
    }
  }
}

function mapStateToProps({decks}, {route}) {
  if (!decks) {
    return {
      cardsInDeck: 0,
      currentCardNumber: 0,
      deckQuestionStack: [],
      currentQuestion: {id: "", question: "", answer: ""},
    };
  }
  const {deckId} = route.params;
  const deck = decks[deckId];
  const unanswered = shuffle(getUnansweredQuestions(deck));

  //todo this is a mess
  let currentCardNumber = 0;
  if (deck.questions.length > 0) {
    currentCardNumber = 1;
  }
  if (unanswered.length !== deck.questions.length) {
    currentCardNumber = deck.questions.length - unanswered.length + 1;
  }

  return {
    deckId: deckId,
    cardsInDeck: deck.questions.length,
    currentCardNumber: currentCardNumber,
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
