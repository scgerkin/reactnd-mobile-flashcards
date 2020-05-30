import React, {Fragment} from "react";
import {connect} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";
import NewDeck from "./NewDeck";
import {createStackScreenOptions} from "../utils/navigationOptions";

const Stack = createStackNavigator();

export const NEW_DECK = "NEW_DECK";
export const NEW_QUESTION = "NEW_QUESTION";

function CreateHome(props) {
  return (
      <Fragment>
        <Stack.Navigator initialRouteName={NEW_DECK}>
          <Stack.Screen
              name={NEW_DECK}
              component={NewDeck}
              options={createStackScreenOptions("Create a new Deck")}
          />
          {/*todo figure out a way to get the deck title?*/}
        </Stack.Navigator>
      </Fragment>
  )
}

export default connect()(CreateHome);
