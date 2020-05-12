import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import Deck from './Deck';
import {connect} from "react-redux";
import {handleInitialData} from "../actions/index";
import {backgroundGrey, green} from "../utils/colors";


export class DeckList extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const {decks, navigation} = this.props;
    return (
      (Object.keys(decks).length === 0) ?
        <View style={styles.noDecksContainer}>
          <Text style={styles.noDecks}>Currently you don't have any decks. Please add your first deck by clicking on `Add Deck`</Text>
        </View>
        :
        <View>
          <ScrollView>
          {Object.values(decks).map(deck => {
            return (
              <TouchableOpacity
                key={deck.title}
                onPress={() => navigation.push('DeckDetails', {
                  title: deck.title
                })}>
                <Deck deck={deck}/>
              </TouchableOpacity>
            )
          })}
          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  noDecks: {
    fontSize: 20,
    color: green,
    backgroundColor: backgroundGrey,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    margin:10
  },
  noDecksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);
