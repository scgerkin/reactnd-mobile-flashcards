import React from "react";
import {connect} from "react-redux";
import {TextInput, View} from "react-native";
import {addDeck} from "../../redux/actions";
import DefaultButton from "../Buttons/DefaultButton";
import {btnSubmit} from "../../styles/buttons";
import {inputDefault} from "../../styles/input";
import {generateUID} from "../../utils/helpers";
import {NAV_DECK_ROOT} from "../navConstants";

class NewDeck extends React.Component {
  state = {
    deckName: "",
  };

  //todo validate input
  onSubmit = () => {
    const {dispatch, navigation} = this.props;
    const id = generateUID();
    const deck = {
      id: id,
      title: this.state.deckName,
      questions: [],
      correct: [],
      incorrect: [],
    };
    dispatch(addDeck(deck));
    navigation.navigate(NAV_DECK_ROOT, {screen: id});
  };

  render() {
    return (
        <View>
          <TextInput
              style={inputDefault.container}
              placeholder={"Enter a new name for your Deck"}
              onChangeText={text => this.setState(({deckName: text}))}
              defaultValue={this.state.deckName}
          />
          <DefaultButton style={btnSubmit}
                         onPressEvent={this.onSubmit}
                         text={"Submit"}/>
        </View>
    );
  }
}

export default connect()(NewDeck);
