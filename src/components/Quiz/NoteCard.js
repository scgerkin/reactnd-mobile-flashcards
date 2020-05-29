import React from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
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
          <View style={cardDefault.container}>
            <Text style={cardDefault.content}>
              {this.state.questionView ?
                  question :
                  answer}
            </Text>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

export default NoteCard;
