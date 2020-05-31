import React from "react";
import {connect} from "react-redux";
import {TextInput, View} from "react-native";
import {addQuestion} from "../../redux/actions";
import {btnSubmit} from "../../styles/buttons";
import DefaultButton from "../Buttons/DefaultButton";
import {inputDefault} from "../../styles/input";

//todo validate input
//todo give feedback on question added
class NewQuestion extends React.Component {
  state = {
    question: "",
    answer: "",
  };

  onSubmit = () => {
    const {dispatch, deckId, navigation} = this.props;
    const {question, answer} = this.state;
    dispatch(addQuestion(deckId, question, answer));
    navigation.navigate(deckId);
  };

  render() {
    return (
        <View>
          <TextInput
              style={inputDefault.container}
              placeholder={"Enter the question"}
              onChangeText={text => this.setState(({question: text}))}
              defaultValue={this.state.question}
          />
          <TextInput
              style={inputDefault.container}
              placeholder={"Enter the answer"}
              onChangeText={text => this.setState(({answer: text}))}
              defaultValue={this.state.answer}
          />
          <DefaultButton style={btnSubmit}
                         onPressEvent={this.onSubmit}
                         text={"Submit"}/>
        </View>
    );
  }
}

export default connect()(NewQuestion);
