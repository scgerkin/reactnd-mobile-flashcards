import React from "react";
import {connect} from "react-redux";
import {View, Text, TextInput} from "react-native";
import {addDeck} from "../../redux/actions";
import Button from "../Shared/Button";
import {btnSubmit} from "../../styles/buttons";

class NewDeck extends React.Component {
  state = {
    deckName: ""
  }

  onSubmit = () => {
    const {dispatch} = this.props;
    dispatch(addDeck(this.state.deckName))
  }

  render() {
    return (
        <View>
          <TextInput
              placeholder={"Enter a new name for your Deck"}
              onChangeText={text => this.setState(({deckName: text}))}
              defaultValue={this.state.deckName}
          />
          <Button style={btnSubmit} onPressEvent={this.onSubmit} text={"Submit"}/>
        </View>
    );
  }
}

export default connect()(NewDeck);
