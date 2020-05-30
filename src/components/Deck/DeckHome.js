import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import DeckList from "./DeckList";

const Stack = createStackNavigator();
export const DECK_ROOT = "Decks";

function DeckHome(props) {
  return (
      <Stack.Navigator initialRouteName={DECK_ROOT}>
        <Stack.Screen name={DECK_ROOT} component={DeckList} options={{title: "Your Decks"}}/>
      </Stack.Navigator>
  );
}

export default DeckHome;
