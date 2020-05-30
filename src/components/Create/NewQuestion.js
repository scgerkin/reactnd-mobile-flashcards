import React from "react";
import {connect} from "react-redux";
import {TextInput, View} from "react-native";
import {addQuestion} from "../../redux/actions";
import {btnSubmit} from "../../styles/buttons";
import Button from "../Shared/Button";

class NewQuestion extends React.Component {
  state = {
    question: "",
    answer: "",
  };

  onSubmit = () => {
    const {dispatch, deckId} = this.props;
    const {question, answer} = this.state;
    dispatch(addQuestion(deckId, question, answer));
  };

  render() {
    return (
        <View>
          <TextInput
              placeholder={"Enter the question"}
              onChangeText={text => this.setState(({question: text}))}
              defaultValue={this.state.question}
          />
          <TextInput
              placeholder={"Enter the answer"}
              onChangeText={text => this.setState(({answer: text}))}
              defaultValue={this.state.answer}
          />
          <Button style={btnSubmit}
                  onPressEvent={this.onSubmit}
                  text={"Submit"}/>
        </View>
    );
  }
}

export default connect()(NewQuestion);
