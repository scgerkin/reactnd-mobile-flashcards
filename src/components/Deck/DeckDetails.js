import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import {cardDefault} from "../../styles/cards";
import Button from "../Shared/Button";
import {btnDelete, btnStart, btnSubmit, btnSuccess} from "../../styles/buttons";

class DeckDetails extends Component {
  state = {
    deck: null,
  };

  componentDidMount() {
    const {deck} = this.props;
    this.setState(({deck}));
  }

  onDeleteDeck = () => {

  };

  onAddQuestion = () => {

  };

  onResetQuiz = () => {

  };

  onStartQuiz = () => {

  };

  render() {
    const {style} = this.props;
    const {deck} = this.state;

    if (!deck) {//todo handle null deck
      return (
          <View><Text>Null deck</Text></View>
      );
    }
    return (
        <Fragment>
          <View style={style ? style.container : cardDefault.container}>
            <Text style={style ?
                style.title :
                cardDefault.title}>{deck.title}</Text>
            <Text style={style ? style.content : cardDefault.content}>
              Total cards: {deck.questions.length}
            </Text>
            {resultsDisplay(deck, style)}

            <Button
                style={btnSubmit}
                text={"Add Question"}
                onPressEvent={this.onAddQuestion}/>
            <Button
                style={btnStart}
                text={"Start Quiz"}
                onPressEvent={this.onStartQuiz}/>
            <Button
                style={btnSuccess}
                text={"Reset Quiz"}
                onPressEvent={this.onResetQuiz}/>
            <Button
                style={btnDelete}
                text={"Delete Deck"}
                onPressEvent={this.onDeleteDeck}/>
          </View>
        </Fragment>
    );
  }
}

function resultsDisplay(deck, style) {
  if (deck.correct.length === 0 && deck.incorrect.length === 0) {
    return (
        <Text style={style ? style.content : cardDefault.content}>You haven't
          started a quiz for this deck yet!</Text>
    );
  } else {
    const unanswered = deck.questions.length -
        (deck.correct.length + deck.incorrect.length);
    return (
        <Fragment>
          <Text style={style ? style.content : cardDefault.content}>Total
            correct: {deck.correct.length}</Text>
          <Text style={style ? style.content : cardDefault.content}>Total
            incorrect: {deck.incorrect.length}</Text>
          {unanswered > 0 && (
              <Text style={style ? style.content : cardDefault.content}>Total
                unanswered: {unanswered}</Text>
          )}
        </Fragment>
    );
  }
}

function mapStateToProps({decks}, {style, deckId}) {

  if (!decks) {
    return null;
  }
  const deck = decks[deckId];
  return {
    style,
    deck,
  };
}

export default connect(mapStateToProps)(DeckDetails);
