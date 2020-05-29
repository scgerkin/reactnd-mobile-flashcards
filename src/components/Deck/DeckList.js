import React from "react";
import {connect} from "react-redux";
import {View, ScrollView, StyleSheet, Text} from "react-native";
import Deck from "./Deck";
import {cardPrimary, cardSecondary} from "../../styles/cards";

function DeckList(props) {
  const {deckIds} = props
  return (
      <View>
      <ScrollView>
        {deckIds.map((id, index) => (
            <Deck
                key={id}
                deckId={id}
                style={index % 2 === 0 ? cardPrimary : cardSecondary}
            />
        ))}
      </ScrollView>
      </View>
  );
}


function mapStateToProps({decks}) {
  return {
    deckIds: !!decks ? Object.keys(decks) : []
  }
}

export default connect(mapStateToProps)(DeckList);
