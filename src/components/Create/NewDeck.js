import React from "react";
import {connect} from "react-redux";
import {TextInput, View} from "react-native";
import {addDeck} from "../../redux/actions";
import Button from "../Shared/Button";
import {btnSubmit} from "../../styles/buttons";
import {inputDefault} from "../../styles/input";

//todo validate input
class NewDeck extends React.Component {
  state = {
    deckName: "",
  };

  onSubmit = () => {
    const {dispatch} = this.props;
    dispatch(addDeck(this.state.deckName));
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
          <Button style={btnSubmit}
                  onPressEvent={this.onSubmit}
                  text={"Submit"}/>
        </View>
    );
  }
}

export default connect()(NewDeck);
