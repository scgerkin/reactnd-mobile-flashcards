import React from 'react'
import {StatusBar, Text, View} from 'react-native'
import Constants from "expo-constants";
import {CLR_BG_03} from "./src/utils/colors";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./src/redux/reducers"
import middleware from "./src/redux/middleware"

const store = createStore(reducer, middleware)

export default function App() {
  return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashcardStatusBar backgroundColor={CLR_BG_03} barStyle={"light-content"}/>
          <Text>App.js</Text>
        </View>
      </Provider>
  );
}

function FlashcardStatusBar({backgroundColor, ...props}) {
  return (
      <View style={{backgroundColor, height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
      </View>
  );
}
