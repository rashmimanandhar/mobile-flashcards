import React from 'react';
import {View,StyleSheet,Text} from "react-native";

const Deck = () => {
  return(
    <View style={[styles.deckContainer]}>
      <View>
        <Text style={[styles.deckTitle]}>Deck 1</Text>
      </View>
      <View>
        <Text style={[styles.cardText]}>2 Cards</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  deckContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin:10,
    borderWidth:1,
    borderColor: 'grey'
  },
  deckTitle: {
    fontSize:30
  },
  cardText: {
    fontSize:20,
    color:'grey'
  }
})

export default Deck;
