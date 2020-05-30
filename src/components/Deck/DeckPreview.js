import React from "react";
import {connect} from "react-redux";
import {Text, TouchableOpacity} from "react-native";
import {cardDefault} from "../../styles/cards";
import {DECK_DETAILS} from "./DeckHome";

function DeckPreview(props) {
  const {style, deck, navigation} = props;
  return (
      <TouchableOpacity
          style={style ? style.container : cardDefault.container}
          onPressEvent={() => {
            navigation.navigate(DECK_DETAILS, {
              deckId: deck.id,
            });
          }}
      >
        <Text style={style ?
            style.title :
            cardDefault.title}>{deck.title}</Text>
        <Text style={style ?
            style.content :
            cardDefault.content}>{deck.questions.length}</Text>
      </TouchableOpacity>
  );
}

function mapStateToProps({decks}, {deckId}) {
  return {
    deck: !!decks ? decks[deckId] : {title: "", questions: []},
  };
}

export default connect(mapStateToProps)(DeckPreview);
