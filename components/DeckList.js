import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Deck from './Deck';
import {connect} from "react-redux";
import {handleInitialData} from "../actions/index";


export class DeckList extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const {decks, navigation} = this.props;
    console.log(Object.keys(decks).length)

    return (
      (Object.keys(decks).length === 0) ?
        <View style={{flex:1}}>
          <Text>Currently you don't have any decks. Please add your first deck by clicking on `Add Deck`</Text>
        </View>
        :
        <View>
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

        </View>
    )
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);
