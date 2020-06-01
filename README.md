# Mobile FlashCards
This project was created as part of [Udacity's React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

It is a mobile application created with `react-native` to run on both iOS and Android. As a note, only Android has been tested; however, there is not any Android specific implementation that should break iOS compatability.

The purpose of the application is to allow the user to create a deck of notecards that can be used to study for a test. For demonstration purposes, the application starts off with a few decks that can be deleted or modified.

## Run the application
To run the application, you must have `react-native` and `expo-cli` installed.
```sh
git clone https://github.com/scgerkin/reactnd-mobile-flashcards.git
cd reactnd-mobile-flashcards
npm install
npm start
# OR
expo start
``` 
This will start the `expo` development console. From there, you can launch the application in an emulator or device.

## Overview
To create a new deck, touch the tab navigator `Create a new Deck` and enter the name of the deck. This will then navigate to the `Deck` screen and allow the user to add questions to the deck. Once a question is added, a quiz can be started.

Touching a notecard in the quiz will flip it to the answer. Once all notecards have been answered, the app will navigate back to the home screen for that deck and show the details of the quiz.

Quizzes can be stopped and resumed at any time without losing progress.

After a quiz has been started (at least one notecard question answered either correctly or incorrectly), the quiz can be reset to a fresh status.
