import React from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import {cardDefault} from "../../styles/cards";
import DefaultButton from "../Buttons/DefaultButton";
import {btnDefault} from "../../styles/buttons";
import {resetQuiz} from "../../redux/actions";

//fixme container is not encompassing entire result text
//todo on reset, navigate to quiz home
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
        <View style={{flex: 1}}>
          <View style={cardDefault.container}>
            <Text style={cardDefault.title}>Quiz Results</Text>
            <Text style={cardDefault.content}>
              Total Questions: {deck.questions.length} {"\n"}
              Total Correct: {deck.correct.length} {"\n"}
              Total Incorrect: {deck.incorrect.length} {"\n"}
            </Text>
          </View>
          <DefaultButton style={btnDefault} text={"Reset Quiz"} onPressEvent={this.onResetQuiz}/>
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
