import React from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import {btnIncorrect, btnSuccess} from "../../styles/buttons";
import Button from "../Shared/Button";
import NoteCard from "./NoteCard";
import {shuffle} from "../../utils/helpers";

class Quiz extends React.Component {
  //fixme not sure all of these are necessary, can probably simplify this
  // if not, maybe extract some of this into some sub components
  // correct/incorrect could be redundant if we use redux
  state = {
    cardsInDeck: 0,
    currentCardNumber: 0,
    deckQuestionStack: [],
    currentQuestion: {id: "", question: "", answer: ""},
    totalCorrect: 0,
    totalIncorrect: 0,
    lastCard: false,
  };

  componentDidMount() {
    const {
      cardsInDeck, currentCardNumber, deckQuestionStack,
      currentQuestion, totalCorrect, totalIncorrect,
    } = this.props;

    this.setState(({
      cardsInDeck,
      currentCardNumber,
      deckQuestionStack,
      currentQuestion,
      totalCorrect,
      totalIncorrect,
      lastCard: cardsInDeck === 1,
    }));
  }

  onCorrect = () => {
    //todo
    // update state
    // move to next card
    this.popNextCard(true);
    console.log("Correct");
  };

  onIncorrect = () => {
    this.popNextCard(false);
    console.log("Incorrect");
  };

  // todo remove .pop so not mutating state, instead use filter, using the state
  //  containing correct/incorrect ids
  //  that way, when a question has been asked but not answered, it's still part
  //  of the questions to ask
  popNextCard = (answeredCorrectly) => {
    this.setState((currState) => {
      return {
        currentCardNumber: currState.currentCardNumber + 1,
        deckQuestionStack: currState.deckQuestionStack,
        currentQuestion: currState.deckQuestionStack.pop(),
        lastCard: currState.deckQuestionStack.length === 1,
        totalCorrect: answeredCorrectly ?
            currState.totalCorrect + 1 :
            currState.totalCorrect,
        totalIncorrect: !answeredCorrectly ?
            currState.totalIncorrect + 1 :
            currState.totalIncorrect,
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
            <NoteCard
                question={currentQuestion.question}
                answer={currentQuestion.answer}
            />
            <Button
                style={btnSuccess}
                text={"Correct"}
                onPressEvent={this.onCorrect}
            />
            <Button
                style={btnIncorrect}
                text={"Incorrect"}
                onPressEvent={this.onIncorrect}
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
      totalCorrect: 0,
      totalIncorrect: 0,
    };
  }

  const deck = decks[deckId];
  const shuffledQuestions = shuffle(deck.questions);
  return {
    cardsInDeck: deck.questions.length,
    currentCardNumber: deck.questions.length > 0 ? 1 : 0,
    deckQuestionStack: shuffledQuestions,
    currentQuestion: shuffledQuestions.pop(),
    totalCorrect: 0,
    totalIncorrect: 0,
  };
}

export default connect(mapStateToProps)(Quiz);
