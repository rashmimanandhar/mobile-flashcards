import React, {Component} from 'react';
import {Platform, StatusBar, View} from 'react-native';
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
import {Ionicons} from "@expo/vector-icons";

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import {green} from "./utils/colors";
import {setLocalNotification} from "./utils/api";

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
  <Tabs.Navigator
    screenOptions={({route}) => ({

      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Add Deck') {
          iconName = focused
            ? 'ios-add-circle'
            : 'ios-add-circle-outline';
        } else if (route.name === 'Deck List') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: green,
      inactiveTintColor: 'gray',
    }}
  >
    <Tabs.Screen name="Deck List" component={DeckList}/>
    <Tabs.Screen name="Add Deck" component={AddDeck}/>
  </Tabs.Navigator>
);

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {

    return (
      <Provider store={store}>
        <NavigationContainer>
          <MobiFlashCardStatusBar
            backgroundColor={green}
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
}

