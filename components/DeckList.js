import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Deck from './Deck';

export class DeckList extends Component {
  render() {
    const {navigation} = this.props;
    return(
      <View>
        <TouchableOpacity onPress={() => navigation.push('DeckDetails')}>
          <Deck />
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckList;
