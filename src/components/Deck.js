import React from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";

function Deck(props) {
  const {deck} = props;
  return (
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>
      </View>
  );
}

function mapStateToProps({decks}, {deckKey}) {
  return {
    deck: !!decks ? decks[deckKey] : {title: "", questions: []}
  };
}

export default connect(mapStateToProps)(Deck);
