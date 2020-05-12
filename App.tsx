import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckDetails from './components/DeckDetails';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';

import Constants from 'expo-constants';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import {red, white, green} from "./utils/colors";

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)
function MobiFlashCardStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const AppStack = createStackNavigator();
const Tabs = (Platform.OS === 'ios') ? createBottomTabNavigator() : createMaterialTopTabNavigator();
const MyTabs = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Deck List" component={DeckList}/>
    <Tabs.Screen name="Add Deck" component={AddDeck}/>
  </Tabs.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MobiFlashCardStatusBar
          backgroundColor= {green}
          barStyle="light-content"
        />
        <AppStack.Navigator>
          <AppStack.Screen name="DeckList" component={MyTabs} options={{title: "Decks List", headerShown: false}}/>
          <AppStack.Screen name="DeckDetails" component={DeckDetails} options={{title: "Deck Details"}}/>
          <AppStack.Screen name="AddCard" component={AddCard} options={{title: "Add Card"}}/>
          <AppStack.Screen name="Quiz" component={Quiz} options={{title: "Quiz"}}/>
        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

