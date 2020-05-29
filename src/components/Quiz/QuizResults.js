import React from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import {cardDefault} from "../../styles/cards";
import Button from "../Shared/Button";
import {btnDefault} from "../../styles/buttons";
import {resetQuiz} from "../../redux/actions";

class QuizResults extends React.Component {

  onResetQuiz = () => {
    const {dispatch, deck} = this.props;
    dispatch(resetQuiz(deck.id));
  };

  render() {
    const {deck} = this.props;

    if (!deck) {
      return (
          <View>
            <Text>
              No deck to show
            </Text>
          </View>
      );
    }

    return (
        <View>
          <View style={cardDefault.container}>
            <Text style={cardDefault.title}>Quiz Results</Text>
            <Text style={cardDefault.content}>
              Total Questions: {deck.questions.length} {"\n"}
              Total Correct: {deck.correct.length} {"\n"}
              Total Incorrect: {deck.incorrect.length} {"\n"}
            </Text>
          </View>
          <Button style={btnDefault} text={"Reset Quiz"} onPressEvent={this.onResetQuiz}/>
        </View>
    );
  }
}

function mapStateToProps({decks}, {deckId}) {
  return {
    deck: !!decks ? decks[deckId] : null,
  };
}

export default connect(mapStateToProps)(QuizResults);
