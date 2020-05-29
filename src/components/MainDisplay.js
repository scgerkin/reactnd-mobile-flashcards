import React from "react";
import {View, ScrollView} from 'react-native'
import {connect} from "react-redux";
import {handleInitialData} from "../redux/actions";
import DeckList from "./Deck/DeckList";
import Button from "./Shared/Button";
import {
  btnDefault, btnDelete,
  btnStart,
  btnSubmit,
  btnSuccess, btnText,
  btnIncorrect,
} from "../styles/buttons";
import Quiz from "./Quiz/Quiz";

class MainDisplay extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
        <ScrollView>
          <Quiz question={"Question"} answer={"Answer"}/>
        </ScrollView>
    );
  }
}

export default connect()(MainDisplay);
