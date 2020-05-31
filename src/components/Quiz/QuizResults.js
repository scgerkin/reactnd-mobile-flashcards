import React from "react";
import {connect} from "react-redux";
import {Text, View, YellowBox} from "react-native";
import {cardDefault} from "../../styles/cards";
import DefaultButton from "../Buttons/DefaultButton";
import {btnDefault} from "../../styles/buttons";

// note: this warning happens because this component receives a function as a prop
//  via the parent component, which is given the function via navigation.
//  This could be solved by refactoring this component to be part of the navigation
//  chain, but it would reintroduce some code duplication and some significant
//  complexity along with it. If only for that reason, I have decided to ignore
//  the warning.
YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

function QuizResults(props) {
  const {deck, resetQuiz} = props;

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
        <DefaultButton style={btnDefault} text={"Reset Quiz"}
                       onPressEvent={resetQuiz}/>
      </View>
  );
}

function mapStateToProps({decks}, {deckId}) {
  return {
    deck: !!decks ? decks[deckId] : null,
  };
}

export default connect(mapStateToProps)(QuizResults);
