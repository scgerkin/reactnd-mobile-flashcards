import React, {Fragment} from "react";
import {connect} from "react-redux";
import {ScrollView, Text, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import DeckDetails from "./DeckDetails";
import DeckPreview from "./DeckPreview";
import {deckPrimary, deckSecondary} from "../../styles/cards";
import DeckList from "./DeckList";

const Stack = createStackNavigator();
export const DECK_ROOT = "Decks";
export const DECK_DETAILS = "Deck Details";

export const DECK_LIST = "DECK_LIST";

class DeckHome extends React.Component {

  render() {
    const {decks} = this.props;

    if (!decks) {
      return noDecks(this.props);
    }

    const deckIds = Object.keys(decks);

    const {navigation} = this.props;

    return (
        <Fragment>
          <Stack.Navigator initialRouteName={DECK_LIST}>
            <Stack.Screen
                name={DECK_LIST}
                component={DeckList}
                options={{title: "Your Decks"}}
            />
            {deckIds.map(id => {
              const title = decks[id].title;
              return (
                  <Stack.Screen
                      key={id}
                      name={id}
                      >
                    {props => <DeckDetails {...props} deckId={id}/>}
                  </Stack.Screen>);
            })}
          </Stack.Navigator>
        </Fragment>
    );
  }
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
