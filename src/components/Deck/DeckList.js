import React, {Fragment} from "react";
import {connect} from "react-redux";
import {ScrollView, TouchableOpacity} from "react-native";
import {deckPrimary, deckSecondary} from "../../styles/cards";
import DeckPreview from "./DeckPreview";

function DeckList(props) {
  const {decks, navigation} = props;
  const deckIds = Object.keys(decks);
  return (
      <ScrollView>
        {deckIds.map((id, index) => (
            <Fragment key={id}>
              <TouchableOpacity onPress={() => navigation.navigate(id)}>
                <DeckPreview
                    deckTitle={decks[id].title}
                    totalCards={decks[id].questions.length}
                    style={index % 2 === 0 ? deckPrimary : deckSecondary}
                />
              </TouchableOpacity>
            </Fragment>
        ))}
      </ScrollView>
  );
}

function mapStateToProps({decks}) {
  return {
    decks: !!decks ? decks : null,
  };
}

export default connect(mapStateToProps)(DeckList);
