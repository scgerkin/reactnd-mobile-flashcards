import React from "react";
import {connect} from "react-redux";
import {View, ScrollView, StyleSheet, Text} from "react-native";
import Deck from "./Deck";

function DeckList(props) {
  const {deckIds} = props
  return (
      <View>
      <ScrollView>
        {deckIds.map(id => (
            <Deck key={id} deckId={id}/>
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
