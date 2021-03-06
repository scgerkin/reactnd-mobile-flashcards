import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Text, View} from "react-native";
import {cardDefault} from "../../styles/cards";
import DefaultButton from "../Buttons/DefaultButton";
import {btnDelete, btnStart, btnSubmit, btnCorrect} from "../../styles/buttons";
import {
  NAV_ADD_QUESTION_BASE,
  NAV_DECK_LIST,
  NAV_QUIZ,
} from "../../utils/navConstants";
import {deleteDeck, resetQuiz} from "../../redux/actions";
import QuizResults from "../Quiz/QuizResults";

//fixme refactor buttons into separate component
//consider moving each button into a component
class DeckDetails extends Component {
  onDeleteDeck = () => {
    //todo confirm delete
    const {deck, dispatch, navigation} = this.props;
    dispatch(deleteDeck(deck.id));
    navigation.navigate(NAV_DECK_LIST);
  };

  onAddQuestion = () => {
    const {deck, navigation} = this.props;
    navigation.navigate(NAV_ADD_QUESTION_BASE + deck.id);
  };

  //todo don't show when quiz not started
  onResetQuiz = () => {
    const {dispatch, deck, navigation} = this.props;
    dispatch(resetQuiz(deck.id));
    navigation.navigate(deck.id);
  };

  //todo don't show when no question or quiz completed
  onStartQuiz = () => {
    const {deck, navigation} = this.props;
    navigation.navigate(NAV_QUIZ, {
      deckId: deck.id,
    });
  };

  //fixme this is a mess
  quizButtons() {
    const {deck} = this.props;
    const numQuestions = deck.questions.length;
    const numAnswered = deck.correct.length + deck.incorrect.length;
    const unfinishedQuiz = deck.correct.length !== 0 ||
        deck.incorrect.length !== 0;

    if (numQuestions && numQuestions === numAnswered) {
      return this.resetQuizButton();
    }

    if (numQuestions && unfinishedQuiz) {
      return (
          <Fragment>
            <DefaultButton
                style={btnStart}
                text={"Continue Quiz"}
                onPressEvent={this.onStartQuiz}
            />
            {this.resetQuizButton()}
          </Fragment>
      );
    }
    if (numQuestions) {
      return this.startQuizButton();
    }
  }

  startQuizButton() {
    return (
        <DefaultButton
            style={btnStart}
            text={"Start Quiz"}
            onPressEvent={this.onStartQuiz}/>
    );
  }

  resetQuizButton() {
    return (
        <DefaultButton
            style={btnCorrect}
            text={"Reset Quiz"}
            onPressEvent={this.onResetQuiz}/>
    );
  }

  render() {
    const {style, deck} = this.props;

    if (!deck) {//todo replace with loading spinner
      return (
          <View><Text>Null deck</Text></View>
      );
    }
    return (
        <Fragment>
          <View style={style ? style.container : cardDefault.container}>
            <Text style={style ?
                style.title :
                cardDefault.title}>{deck.title}</Text>
            <Text style={style ? style.content : cardDefault.content}>
              Total cards: {deck.questions.length}
            </Text>

            <QuizResults deckId={deck.id} style={style}/>

            <DefaultButton
                style={btnSubmit}
                text={"Add Question"}
                onPressEvent={this.onAddQuestion}/>

            {this.quizButtons()}

            <DefaultButton
                style={btnDelete}
                text={"Delete Deck"}
                onPressEvent={this.onDeleteDeck}/>
          </View>
        </Fragment>
    );
  }
}

function mapStateToProps({decks}, {style, deckId}) {

  if (!decks) {
    return null;
  }
  const deck = decks[deckId];
  return {
    style,
    deck,
  };
}

export default connect(mapStateToProps)(DeckDetails);
