import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Deck from "./Deck";
import Button from "./Button";
import TextButton from "./TextButton";

export class DeckDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Deck/>
        <View style={styles.container}>
          <Button
            btnStyle={{backgroundColor: 'white'}}
            btnTextStyle={{color: 'black'}}
            onPress={() => console.log("card added")}
          >
            Add Card
          </Button>

          <Button
            btnStyle={{backgroundColor: 'red'}}
            btnTextStyle={{color: 'white'}}
            onPress={() => console.log("quiz started")}
          >
            Start Quiz
          </Button>

          <TextButton
            btnTextStyle={{color: 'red'}}
            onPress={() => console.log("delete deck")}
          >
            Delete Deck
          </TextButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
})
export default DeckDetails;
