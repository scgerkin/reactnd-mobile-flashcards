import React, {Fragment} from "react";
import {connect} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";
import DeckDetails from "./DeckDetails";
import DeckList from "./DeckList";
import {NAV_ADD_QUESTION_BASE, NAV_DECK_LIST, NAV_QUIZ} from "../../utils/navConstants";
import NewQuestion from "../Create/NewQuestion";
import Quiz from "../Quiz/Quiz";
import {CLR_GREY_LT, CLR_WHITE_DRK} from "../../styles/colors";

const Stack = createStackNavigator();

function DeckHome(props) {
  const {decks} = props;
  const deckIds = Object.keys(decks);

  return (
      <Fragment>
        <Stack.Navigator initialRouteName={NAV_DECK_LIST}>
          <Stack.Screen
              name={NAV_DECK_LIST}
              component={DeckList}
              options={createStackScreenOptions("Your Decks")}
          />
          {deckIds.map(id => {
            return (
                <Fragment key={id}>
                  <Stack.Screen
                      name={id}
                      options={createStackScreenOptions(decks[id].title)}
                  >
                    {props => <DeckDetails {...props} deckId={id}/>}
                  </Stack.Screen>
                  <Stack.Screen
                      name={NAV_ADD_QUESTION_BASE + id}
                      options={createStackScreenOptions("Add question")}
                  >
                    {props => <NewQuestion {...props} deckId={id}/>}
                  </Stack.Screen>
                </Fragment>
            );
          })}
          <Stack.Screen
              name={NAV_QUIZ}
              component={Quiz}
              options={createStackScreenOptions("Quiz")}
          />
        </Stack.Navigator>
      </Fragment>
  );
}

function createStackScreenOptions(title) {
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
