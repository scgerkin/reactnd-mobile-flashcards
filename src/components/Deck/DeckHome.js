import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import DeckList from "./DeckList";
import DeckDetails from "./DeckDetails";

const Stack = createStackNavigator();
export const DECK_ROOT = "Decks";
export const DECK_DETAILS = "Deck Details";

function DeckHome(props) {
  return (
      <Stack.Navigator initialRouteName={DECK_DETAILS}>
        <Stack.Screen name={DECK_ROOT} component={DeckList} options={{title: "Your Decks"}}/>
        <Stack.Screen name={DECK_DETAILS} component={DeckDetails} initialParams={{deckId: "TESTDECK"}}/>
      </Stack.Navigator>
  );
}

export default DeckHome;
