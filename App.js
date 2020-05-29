import React from 'react'
import {StatusBar, Text, View} from 'react-native'
import Constants from "expo-constants";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./src/redux/reducers"
import middleware from "./src/redux/middleware"
import MainDisplay from "./src/components/MainDisplay";
import {CLR_GREY_LT} from "./src/styles/colors";

const store = createStore(reducer, middleware)

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <View style={{flex: 1}}>
            <FlashcardStatusBar backgroundColor={CLR_GREY_LT} barStyle={"light-content"}/>
            <MainDisplay/>
          </View>
        </Provider>
    );
  }
}

function FlashcardStatusBar({backgroundColor, ...props}) {
  return (
      <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
      </View>
  );
}


export default App;
