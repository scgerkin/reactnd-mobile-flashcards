import React from "react";
import {connect} from "react-redux";
import {Text, View, StyleSheet} from "react-native";
import {CLR_FG_00} from "../../utils/colors";

function Deck(props) {
  const {deck} = props;
  return (
      <View style={styles.item}>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>
      </View>
  );
}

function mapStateToProps({decks}, {deckId}) {
  return {
    deck: !!decks ? decks[deckId] : {title: "", questions: []}
  };
}


const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: CLR_FG_00,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default connect(mapStateToProps)(Deck);
