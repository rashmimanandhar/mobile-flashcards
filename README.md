# Mobile Flashcard

This project is created using React Native and Redux. The main objective of this project is to create decks and cards. This app is a flashcard to quiz yourself on the knowledge based on the cards created. User is able to create decks by clicking on the tab called `Add Deck`, the list of all the added decks are shown in the first screen called `Deck List`. Once you have created your deck, you can then add cards to it. The card will be a simple form of question and answer. When added to a deck, users are able to quiz themselves on the card created. The user can update his result himself based on if his answer was correct or not. Once the user is at the end of the quiz, user will be shown the result of how he performed. 

To run the project
* install all project dependencies with `yarn install`
* start the development server with `yarn start`
* To run in ios/android devices use `expo start`

## Project Structure
```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── reducers
│   ├── index.js # state manipulation for decks and cards
└── actions
│   ├── index.js # contains all the action type and action creator for decks and cards
└── components
│   ├── AddCard.js # component to add card to deck (in both localstorage and state)
│   ├── AddDeck.js # component to add deck to localstorage and state
│   ├── Button.js # scafolding for button with background color
│   ├── Deck.js # component to render deck 
│   ├── DeckDetails.js # component to render deck info with buttons to add card, start quiz and remove deck
│   ├── DeckList.js # component to render all the decks
│   ├── Quiz.js # component to start the quiz and show the result
│   ├── TextButton.js # scafolding for button without background color
└── utils
│   ├── _Data.js # data to add if no decks available
│   ├── api.js # file to update localstorage
│   ├── colors.js # file with all the colors used in the app
 
```

## Create React Native App

This project was bootstrapped with [Create React Native App and Expo](https://github.com/expo/create-react-native-app). You can find more information on how to perform common tasks [here](https://github.com/expo/create-react-native-app/blob/master/README.md).
You can find the app here 
`https://exp.host/@rashmi.himars/mobile-flashcards`

##Notes
- For IOS: Ability to schedule an automatically repeated notification is deprecated on iOS and will be removed in the next SDK release.
- IOS notification works only if app is in background

## Test
The app has been tested using iPad and Android (Pixel 3).

## Screenshots IOS
<img src="https://github.com/rashmimanandhar/mobile-flashcards/blob/master/assets/ios/ios-noDecks.png" height="500"/>

<img src="https://github.com/rashmimanandhar/mobile-flashcards/blob/master/assets/ios/ios-deckDetails.png" height="500"/>

<img src="https://github.com/rashmimanandhar/mobile-flashcards/blob/master/assets/ios/ios-addCard.png" height="500"/>

<img src="https://github.com/rashmimanandhar/mobile-flashcards/blob/master/assets/ios/ios-startQuiz.png" height="500"/>

<img src="https://github.com/rashmimanandhar/mobile-flashcards/blob/master/assets/ios/ios-result.png" height="500"/>

<img src="https://github.com/rashmimanandhar/mobile-flashcards/blob/master/assets/ios/ios-notification.png" height="500"/>

## Screenshots Android
<img src="https://github.com/rashmimanandhar/mobile-flashcards/blob/master/assets/android/android-startQuiz.png" height="500"/>

<img src="https://github.com/rashmimanandhar/mobile-flashcards/blob/master/assets/android/android-addDeck.png" height="500"/>

<img src="https://github.com/rashmimanandhar/mobile-flashcards/blob/master/assets/android/android-result.png" height="500"/>

<img src="https://github.com/rashmimanandhar/mobile-flashcards/blob/master/assets/android/android-notification.png" height="500"/>


