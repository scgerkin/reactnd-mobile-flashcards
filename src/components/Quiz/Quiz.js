import React from "react";
import {connect} from "react-redux";
import {View} from "react-native";
import {btnIncorrect, btnSuccess} from "../../styles/buttons";
import Button from "../Shared/Button";
import NoteCard from "./NoteCard";
import {shuffle} from "../../utils/helpers";

class Quiz extends React.Component {
  state = {
    cardsInDeck: 0,
    cardsLeft: 0,
    deckQuestionStack: [],
    currentQuestion: {id: "", question: "", answer: ""},
    totalCorrect: 0,
    totalIncorrect: 0,
    lastCard: false
  };

  componentDidMount() {
    const {
      cardsInDeck, cardsLeft, deckQuestionStack,
      currentQuestion, totalCorrect, totalIncorrect,
    } = this.props;

    this.setState(({
      cardsInDeck,
      cardsLeft,
      deckQuestionStack,
      currentQuestion,
      totalCorrect,
      totalIncorrect,
    }));
  }

  onCorrect = () => {
    //todo
    // update state
    // move to next card
    this.popNextCard();
    console.log(this.state.lastCard ? "LAST CARD" : "not last card");
    console.log("Correct");
  };

  onIncorrect = () => {
    //todo
    // update state
    // move to next card
    console.log("Incorrect");
  };

  popNextCard = () => {
    this.setState((currState) => {
      return {
        cardsLeft: currState - 1,
        deckQuestionStack: currState.deckQuestionStack,
        currentQuestion: currState.deckQuestionStack.pop(),
        lastCard: currState.deckQuestionStack.length === 1
      };
    });
  };

  render() {
    return (
        <View>
          <NoteCard
              question={this.state.currentQuestion.question}
              answer={this.state.currentQuestion.answer}
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

function mapStateToProps({decks}, {deckId}) {
  if (!decks) {
    return {
      cardsInDeck: 0,
      cardsLeft: 0,
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
    cardsLeft: deck.questions.length,
    deckQuestionStack: shuffledQuestions,
    currentQuestion: shuffledQuestions.pop(),
    totalCorrect: 0,
    totalIncorrect: 0,
  };
}

export default connect(mapStateToProps)(Quiz);
