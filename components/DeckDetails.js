import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Deck from "./Deck";
import Button from "./Button";
import TextButton from "./TextButton";
import {connect} from "react-redux";
import {removeDeck} from "../actions/index";
import {deleteDeck} from "../utils/api";
import {green, red, white} from "../utils/colors";

export class DeckDetails extends Component {
  handleOnDelete =(title) =>{
    const {navigation, dispatch} = this.props;
    dispatch(removeDeck(title));
    deleteDeck(title).then(() =>{

    });
    navigation.goBack();
  }
  render() {
    const {navigation, route, dispatch, decks} = this.props;

    const deckTitle = route.params.title;
    const deck = decks[deckTitle];
    return (
      <View style={styles.container}>
        <Deck deck={deck}/>
        <View style={styles.container}>
          <Button
            btnStyle={{backgroundColor: green}}
            btnTextStyle={{color: white}}
            onPress={() => navigation.push('AddCard', {
              title: deckTitle
            })}>
            Add Card
          </Button>

          <Button
            btnStyle={{backgroundColor: white, borderWidth:1, borderColor:green}}
            btnTextStyle={{color: green}}
            onPress={() => navigation.push('Quiz', {
              deck: {deck}
            })}
          >
            Start Quiz
          </Button>

          <TextButton
            btnTextStyle={{color: red}}
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

function mapStateToProps(decks) {
  return {
    decks
  }
}
export default connect(mapStateToProps)(DeckDetails);
