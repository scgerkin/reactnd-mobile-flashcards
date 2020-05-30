import React from "react";
import {Text, View} from "react-native";
import {cardDefault} from "../../styles/cards";

function DeckPreview(props) {
  const {style, deckTitle, totalCards} = props;
  return (
      <View style={style ? style.container : cardDefault.container}>
        <Text style={style ?
            style.title :
            cardDefault.title}>{deckTitle}</Text>
        <Text style={style ?
            style.content :
            cardDefault.content}>{totalCards}</Text>
      </View>
  );
}

export default DeckPreview;
