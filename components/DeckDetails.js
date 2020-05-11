import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Deck from "./Deck";
import Button from "./Button";
import TextButton from "./TextButton";
import {connect} from "react-redux";
import {removeDeck} from "../actions/index";
import {deleteDeck} from "../utils/api";

export class DeckDetails extends Component {
  handleOnDelete =(title) =>{
    const {navigation, dispatch} = this.props;
    dispatch(removeDeck(title));
    deleteDeck(title).then(() =>{

    });
    navigation.goBack();
  }
  render() {
    const {navigation, route, dispatch} = this.props;

    const deck = route.params.deck.deck
    const deckTitle = deck['title']
    return (
      <View style={styles.container}>
        <Deck deck={deck}/>
        <View style={styles.container}>
          <Button
            btnStyle={{backgroundColor: 'white'}}
            btnTextStyle={{color: 'black'}}
            onPress={() => navigation.push('AddCard', {
              title: {deckTitle}
            })}>
          >
            Add Card
          </Button>

          <Button
            btnStyle={{backgroundColor: 'red'}}
            btnTextStyle={{color: 'white'}}
            onPress={() => navigation.push('Quiz', {
              title: {deckTitle}
            })}
          >
            Start Quiz
          </Button>

          <TextButton
            btnTextStyle={{color: 'red'}}
            onPress={() => this.handleOnDelete(deck.title)}
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
export default connect()(DeckDetails);
