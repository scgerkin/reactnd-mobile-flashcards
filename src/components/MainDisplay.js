import React from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";

import {handleInitialData} from "../redux/actions";
import NewDeck from "./Create/NewDeck";
import DeckHome from "./Deck/DeckHome";
import {CLR_GREEN, CLR_GREY_LT, CLR_LT_BLUE} from "../styles/colors";
import {NAV_NEW_QUESTION, NAV_DECK_ROOT} from "./navConstants";

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
      return (//todo add a spinner
          <View><Text>Loading</Text></View>
      );
    } else {
      return (
          <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                  tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === NAV_DECK_ROOT) {
                      iconName = focused ? "card-text" : "card-text-outline";
                      return <MaterialCommunityIcons name={iconName} size={size}
                                                     color={color}/>;
                    } else if (route.name === NAV_NEW_QUESTION) {
                      iconName = focused ? "pluscircle" : "pluscircleo";
                      return <AntDesign name={iconName} size={size}
                                        color={color}/>;
                    }
                  },
                })}
                tabBarOptions={{//todo tint needs more contrast
                  activeBackgroundColor: CLR_GREY_LT,
                  inactiveBackgroundColor: CLR_GREY_LT,
                  activeTintColor: CLR_GREEN,
                  inactiveTintColor: CLR_LT_BLUE,
                }}
            >
              <Tab.Screen
                  name={NAV_DECK_ROOT}
                  component={DeckHome}
                  options={{title: "Your Decks"}}
              />
              <Tab.Screen
                  name={NAV_NEW_QUESTION}
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
