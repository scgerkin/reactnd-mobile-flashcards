import React from "react";
import {connect} from "react-redux";
import {Text, View, StyleSheet} from "react-native";
import {cardDefault} from "../../styles/cards";

function Deck(props) {
  const {style, deck} = props;
  return (
      <View style={style ? style.container : cardDefault.container}>
        <Text style={style ? style.title : cardDefault.title}>{deck.title}</Text>
        <Text style={style ? style.content : cardDefault.content}>{deck.questions.length}</Text>
      </View>
  );
}

function mapStateToProps({decks}, {deckId}) {
  return {
    deck: !!decks ? decks[deckId] : {title: "", questions: []}
  };
}


export default connect(mapStateToProps)(Deck);
