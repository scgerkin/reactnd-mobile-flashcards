import React from "react";
import {View} from 'react-native'
import {connect} from "react-redux";
import {handleInitialData} from "../redux/actions";
import Deck from "./Deck/Deck";
import DeckList from "./Deck/DeckList";

class MainDisplay extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
        <View>
          <DeckList/>
        </View>
    );
  }
}

export default connect()(MainDisplay);
