import React from 'react';
import {View,StyleSheet,Text} from "react-native";

const Deck = (props) => {
  const {deck} = props;
  return(
    <View style={[styles.deckContainer]}>
      <View>
        <Text style={[styles.deckTitle]}>{deck.title}</Text>
      </View>
      <View>
        <Text style={[styles.cardText]}>{deck.questions.length} Cards</Text>
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
