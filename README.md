
[Rubric](https://review.udacity.com/#!/rubrics/1021/view)

## Notes:

[React Navigation](https://reactnavigation.org/docs/getting-started/)

Stack Navigator
[https://reactnavigation.org/docs/hello-react-navigation/](https://reactnavigation.org/docs/hello-react-navigation/)
[https://reactnavigation.org/docs/navigating/](https://reactnavigation.org/docs/navigating/)
[https://reactnavigation.org/docs/params/](https://reactnavigation.org/docs/params/)
[https://reactnavigation.org/docs/headers/](https://reactnavigation.org/docs/headers/)
[https://reactnavigation.org/docs/nesting-navigators/](https://reactnavigation.org/docs/nesting-navigators/)

Tab Navigator
[https://reactnavigation.org/docs/tab-based-navigation/](https://reactnavigation.org/docs/tab-based-navigation/)

Drawer Navigator
[https://reactnavigation.org/docs/drawer-based-navigation](https://reactnavigation.org/docs/drawer-based-navigation)

## Requirements
- Use create-react-native-app to build your project.
- Allow users to create a deck which can hold an unlimited number of cards.
- Allow users to add a card to a specific deck.
- The front of the card should display the question.
- The back of the card should display the answer.
- Users should be able to quiz themselves on a specific deck and receive a score once they're done.
- Users should receive a notification to remind themselves to study if they haven't already for that day.

### Views
- Deck List View (Default View)
    - Displays the title of each Deck
    - Displays the number of cards in each deck
- Individual Deck View
    - Displays the title of the Deck
    - Displays the number of cards in the deck
    - Displays an option to start a quiz on this specific deck
    - An option to add a new question to the deck
- Quiz View
    - displays a card question
    - an option to view the answer (flips the card)
    - a "Correct" button
    - an "Incorrect" button
    - the number of cards left in the quiz
    - Displays the percentage correct once the quiz is complete
- New Deck View
    - An option to enter in the title for the new deck
    - An option to submit the new deck title
- New Question View
    - An option to enter in the question
    - An option to enter in the answer
    - An option to submit the new question

### Data
```
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
```
To manage your `AsyncStorage` database, you'll want to create four different helper methods.
- `getDecks`: return all of the decks along with their titles, questions, and answers.
- `getDeck`: take in a single id argument and return the deck associated with that id.
- `saveDeckTitle`: take in a single title argument and add it to the decks.
- `addCardToDeck`: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 
