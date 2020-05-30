import React from "react";
import {ScrollView, Text, View} from "react-native";
import {connect} from "react-redux";
import {handleInitialData} from "../redux/actions";
import Quiz from "./Quiz/Quiz";
import QuizResults from "./Quiz/QuizResults";
import NewDeck from "./Create/NewDeck";
import NewQuestion from "./Create/NewQuestion";

class MainDisplay extends React.Component {
  componentDidMount() {
    if (!this.props.decks) {
      this.props.dispatch(handleInitialData());
    }
  }

  render() {
    const {decks} = this.props;
    if (!decks) {
      return (
          <View><Text>Loading</Text></View>
      );
    } else {
      return (
          <ScrollView>
            <NewQuestion deckId={"TESTDECK"}/>

            {/*<Quiz deckId={"TESTDECK"}/>*/}
          </ScrollView>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const {decks} = state;
  return {decks};
};

export default connect(mapStateToProps)(MainDisplay);
