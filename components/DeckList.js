import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Deck from './Deck';

export class DeckList extends Component {
  render() {
    return(
      <View>
        <Deck/>
        <Deck/>
        <Deck/>
        <Deck/>
      </View>
    )
  }
}

export default DeckList;
