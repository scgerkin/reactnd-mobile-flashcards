import React from "react";
import {View, Text, TouchableWithoutFeedback} from "react-native";
import {cardDefault} from "../../styles/cards";
import {btnSuccess, btnIncorrect} from "../../styles/buttons";
import Button from "../Shared/Button";

class Quiz extends React.Component {
  state = {
    questionView: true,
    question: "",
    answer: ""
  }

  componentDidMount() {
    const {question, answer} = this.props
    this.setState({question, answer})
  }

  onFlipCard = () => {
    this.setState({questionView: !this.state.questionView})
  }

  onCorrect = () => {
    //todo
    // update state
    // move to next card
    console.log("Correct")
  }

  onIncorrect = () => {
    //todo
    // update state
    // move to next card
    console.log("Incorrect")
  }

  render() {
    return (
        <View>
        <TouchableWithoutFeedback
            onPress={this.onFlipCard}
        >
          <View style={cardDefault.container}>
            <Text style={cardDefault.content}>
              {this.state.questionView ? this.state.question : this.state.answer}
            </Text>
          </View>
        </TouchableWithoutFeedback>
          <Button
              style={btnSuccess}
              text={"Correct"}
              onPressEvent={this.onCorrect}
          />
          <Button
              style={btnIncorrect}
              text={"Incorrect"}
              onPressEvent={this.onIncorrect}
          />
        </View>
    );
  }
}



export default Quiz;
