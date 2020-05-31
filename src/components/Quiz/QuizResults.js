import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Text} from "react-native";
import {cardDefault} from "../../styles/cards";

function QuizResults(props) {
  const {deck, style} = props;
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

function mapStateToProps({decks}, {deckId}) {
  return {
    deck: !decks ? null : decks[deckId],
  };
}

export default connect(mapStateToProps)(QuizResults);
