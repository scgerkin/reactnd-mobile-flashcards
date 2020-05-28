import React from "react";
import {View} from 'react-native'
import {connect} from "react-redux";
import {handleInitialData} from "../redux/actions";
import Deck from "./Deck";

class MainDisplay extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
        <View>
          <Deck deckKey={"React"}/>
          <Deck deckKey={"JavaScript"}/>
        </View>
    );
  }
}

export default connect()(MainDisplay);
