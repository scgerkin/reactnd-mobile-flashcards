import React from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import NoteCard from "./NoteCard";
import {shuffle} from "../../utils/helpers";
import {markAnswer} from "../../redux/actions";
import QuizButtons from "./QuizButtons";

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

  componentDidUpdate() {
    const {currentCardNumber} = this.state;
    const {cardsInDeck, deckId, navigation} = this.props;

    if (currentCardNumber === cardsInDeck + 1) {
      navigation.navigate(deckId);
    }
  }

  render() {
    const {currentCardNumber, currentQuestion} = this.state;
    const {cardsInDeck} = this.props;

    // this stops below from resulting in null errors before navigation happens
    if (currentCardNumber === cardsInDeck + 1) {
      return (<View/>);
    }

    if (currentCardNumber <= 0) { //todo make component for this
      return (
          <View><Text>No cards in this deck.</Text></View>
      );
    } else {
      return (
          <View style={{flex: 1}}>
            <View style={{flex: .5}}>
              <Text>Current Card: {currentCardNumber}</Text>
              <Text>Cards in Deck: {cardsInDeck}</Text>
            </View>
            <View style={{flex: 3}}>
              <NoteCard
                  question={currentQuestion.question}
                  answer={currentQuestion.answer}
              />
            </View>
            <View style={{flex: 2}}>
              <QuizButtons markAnswer={this.onMarkAnswer}/>
            </View>
          </View>
      );
    }
  }
}

function mapStateToProps({decks}, {route}) {
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
