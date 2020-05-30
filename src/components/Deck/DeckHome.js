import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import DeckDetails from "./DeckDetails";
import DeckList from "./DeckList";
import {createStackScreenOptions} from "../utils/navigationOptions";
import {DECK_LIST} from "../navConstants";

const Stack = createStackNavigator();

function DeckHome(props) {
  const {decks} = props;

  if (!decks) {
    return noDecks(props);
  }

  const deckIds = Object.keys(decks);

  return (
      <Fragment>
        <Stack.Navigator initialRouteName={DECK_LIST}>
          <Stack.Screen
              name={DECK_LIST}
              component={DeckList}
              options={createStackScreenOptions("Your Decks")}
          />
          {deckIds.map(id => {
            return (
                <Stack.Screen
                    key={id}
                    name={id}
                    options={createStackScreenOptions(decks[id].title)}
                >
                  {props => <DeckDetails {...props} deckId={id}/>}
                </Stack.Screen>);
          })}
        </Stack.Navigator>
      </Fragment>
  );
}

function noDecks(props) {
  //todo handle no decks gracefully
  console.log("NO DECKS RECEIVED FROM PROPS");
  console.log(props);
  return (
      <View>
        <Text>NO DECKS RECEIVED FROM PROPS</Text>
      </View>
  );
}

function mapStateToProps(state) {
  const {decks} = state;
  return {
    decks: !!decks ? decks : null,
  };
}

export default connect(mapStateToProps)(DeckHome);
