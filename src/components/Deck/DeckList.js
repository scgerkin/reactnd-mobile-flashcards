import React from "react";
import {connect} from "react-redux";
import {ScrollView} from "react-native";
import Deck from "./DeckPreview";
import {deckPrimary, deckSecondary} from "../../styles/cards";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

function DeckList(props) {
  const {deckIds} = props;
  return (
      <ScrollView>
        {deckIds.map((id, index) => (
            <Deck
                key={id}
                deckId={id}
                style={index % 2 === 0 ? deckPrimary : deckSecondary}
            />
        ))}
      </ScrollView>
  );
}

function mapStateToProps({decks}) {
  return {
    deckIds: !!decks ? Object.keys(decks) : [],
  };
}

export default connect(mapStateToProps)(DeckList);
