import React from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {handleInitialData} from "../redux/actions";
import NewDeck from "./Create/NewDeck";
import DeckHome from "./Deck/DeckHome";

export const DECK_ROOT = "Decks";
export const CREATE_DECK_ROOT = "New Deck";

const Tab = createBottomTabNavigator();

class MainDisplay extends React.Component {
  componentDidMount() {
    if (!this.props.decks) {
      this.props.dispatch(handleInitialData());
    }
  }

  render() {
    const {decks} = this.props;
    if (!decks) {
      return (
          <View><Text>Loading</Text></View>
      );
    } else {
      return (
          <NavigationContainer>
            <Tab.Navigator initialRouteName={DECK_ROOT}>
              <Tab.Screen
                  name={DECK_ROOT}
                  component={DeckHome}
                  options={{title: "Your Decks"}}
              />
              <Tab.Screen
                  name={CREATE_DECK_ROOT}
                  component={NewDeck}
                  options={{title: "Create a new Deck"}}
              />
            </Tab.Navigator>
          </NavigationContainer>

      );
    }
  }
}

const mapStateToProps = (state) => {
  const {decks} = state;
  return {decks};
};

export default connect(mapStateToProps)(MainDisplay);
