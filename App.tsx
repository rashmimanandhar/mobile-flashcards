import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';

import DeckDetails from './components/DeckDetails';
import AddCard from './components/AddCard';
import Constants from 'expo-constants';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {Provider} from "react-native-paper";

function MobiFlashCardStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const AppStack = createStackNavigator();
const Tabs = (Platform.OS === 'ios') ? createBottomTabNavigator() : createMaterialTopTabNavigator();
const mytabs = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Deck List" component={DeckList}/>
    <Tabs.Screen name="Add Deck" component={AddDeck}/>
  </Tabs.Navigator>
);
export default function App() {
  return (
      <NavigationContainer>
        <MobiFlashCardStatusBar
          backgroundColor='purple'
          barStyle="light-content"
        />
        <AppStack.Navigator>
          <AppStack.Screen name="DeckList" component={mytabs} options={{title: "Deck List", headerShown: false}}/>
          <AppStack.Screen name="DeckDetails" component={DeckDetails} options={{title: "Deck Details"}}/>
          <AppStack.Screen name="AddCard" component={AddCard} options={{title: "Add Card"}}/>
        </AppStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
