import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import DeckDetails from "./DeckDetails";
import DeckList from "./DeckList";
import {CLR_GREY_LT, CLR_WHITE_DRK} from "../../styles/colors";

const Stack = createStackNavigator();

export const DECK_LIST = "DECK_LIST";

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
              options={createOptions("Your Decks")}
          />
          {deckIds.map(id => {
            return (
                <Stack.Screen
                    key={id}
                    name={id}
                    options={createOptions(decks[id].title)}
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

function createOptions(title) {
  return {
    title: title,
    headerTitleAlign: "center",
    headerStyle: {
      height: 100,
      backgroundColor: CLR_GREY_LT,
    },
    headerTintColor: CLR_WHITE_DRK,
  };
}

function mapStateToProps(state) {
  const {decks} = state;
  return {
    decks: !!decks ? decks : null,
  };
}

export default connect(mapStateToProps)(DeckHome);
