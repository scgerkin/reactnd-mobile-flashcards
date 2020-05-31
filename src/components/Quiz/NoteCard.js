import React from "react";
import {Text, TouchableWithoutFeedback, View, StyleSheet} from "react-native";
import {cardDefault} from "../../styles/cards";

class NoteCard extends React.Component {
  state = {
    questionView: true
  }

  onFlipCard = () => {
    this.setState({questionView: !this.state.questionView});
  };

  render() {
    const {question, answer} = this.props;
    return (
        <TouchableWithoutFeedback
            onPress={this.onFlipCard}
        >
          <View style={style.container}>
            <Text style={style.content}>
              {this.state.questionView ?
                  question :
                  answer}
            </Text>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const style = StyleSheet.create({
  container: {
    ...cardDefault.container,
  },
  content: {
    ...cardDefault.content,
    textAlign: "center",
    fontSize: 24
  }
})

export default NoteCard;
