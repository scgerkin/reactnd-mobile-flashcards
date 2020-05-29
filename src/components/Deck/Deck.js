import React from "react";
import {connect} from "react-redux";
import {Text, View, StyleSheet} from "react-native";
import {CLR_GREY_LT, CLR_WHITE_DRK} from "../../styles/colors";

function Deck(props) {
  const {deck} = props;
  return (
      <View style={styles.view}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.question}>{deck.questions.length}</Text>
      </View>
  );
}

function mapStateToProps({decks}, {deckId}) {
  return {
    deck: !!decks ? decks[deckId] : {title: "", questions: []}
  };
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: CLR_GREY_LT,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: CLR_WHITE_DRK,
    fontSize: 32,
  },
  question: {
    color: CLR_WHITE_DRK,
    fontSize: 16
  }
});

export default connect(mapStateToProps)(Deck);
