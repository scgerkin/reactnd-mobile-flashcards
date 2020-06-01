import React from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {cardDefault} from "../../styles/cards";

class NoteCard extends React.Component {
  state = {
    questionView: true,
  };

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
            <View style={{flex: 3, alignItems: "center"}}>
              <Text style={style.content}>
                {this.state.questionView ?
                    question :
                    answer}
              </Text>
            </View>
            <View style={{flex: 1, alignItems: "flex-end"}}>
              <Text style={style.footer}>
                {this.state.questionView
                    ? "(Touch to show answer)"
                    : "(Touch to show question)"
                }
              </Text>
            </View>
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
    fontSize: 24,
  },
  footer: {
    ...cardDefault.content,
    fontSize: 16,
    alignItems: "flex-end",
  },
});

export default NoteCard;
