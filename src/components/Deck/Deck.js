import React from "react";
import {connect} from "react-redux";
import {Text, View, StyleSheet} from "react-native";
import {card} from "../../styles/cards";

function Deck(props) {
  const {deck} = props;
  return (
      <View style={card.container}>
        <Text style={card.title}>{deck.title}</Text>
        <Text style={card.content}>{deck.questions.length}</Text>
      </View>
  );
}

function mapStateToProps({decks}, {deckId}) {
  return {
    deck: !!decks ? decks[deckId] : {title: "", questions: []}
  };
}


export default connect(mapStateToProps)(Deck);
