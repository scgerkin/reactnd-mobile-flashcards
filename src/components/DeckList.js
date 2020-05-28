import React from "react";
import {connect} from "react-redux";
import {FlatList, SafeAreaView, StyleSheet} from "react-native";
import Deck from "./Deck";
import * as Constants from "expo-constants";


function DeckList(props) {
  const {keys} = props
  return (
      <SafeAreaView style={styles.container}>
        <FlatList
            data={keys}
            renderItem={({key}) => <Deck key={key}/>}
            keyExtractor={key}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


function mapStateToProps({decks}) {
  console.log(decks)
  return {
    keys: ["React", "JavaScript"]
  }
}

export default connect(mapStateToProps)(DeckList);
