import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {backgroundGrey, gray, green, white} from "../utils/colors";

const Deck = (props) => {
  const {deck} = props;
  return (
    deck === undefined ?
      <View style={styles.deckContainer}/>
      :
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
    margin: 20,
    borderWidth: 1,
    borderColor: backgroundGrey,
    backgroundColor: white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  deckTitle: {
    fontSize: 30,
    color: green,
    opacity: 0.7
  },
  cardText: {
    fontSize: 15,
    color: gray
  }
})

export default Deck;
