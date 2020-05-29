import React from "react";
import {View} from 'react-native'
import {connect} from "react-redux";
import {handleInitialData} from "../redux/actions";
import Deck from "./Deck/Deck";
import DeckList from "./Deck/DeckList";
import Button from "./Shared/Button";
import {
  btnDefault, btnDelete,
  btnStart,
  btnSubmit,
  btnSuccess, btnText,
  btnWrong,
} from "../styles/buttons";

class MainDisplay extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
        <View>
          <DeckList/>
          <Button style={btnDefault} text={"Default"}/>
          <Button style={btnSuccess} text={"Success"}/>
          <Button style={btnWrong} text={"Wrong"}/>
          <Button style={btnSubmit} text={"Submit"}/>
          <Button style={btnStart} text={"Start"}/>
          <Button style={btnDelete} text={"Delete"}/>
          <Button style={btnText} text={"Text"}/>
        </View>
    );
  }
}

export default connect()(MainDisplay);
