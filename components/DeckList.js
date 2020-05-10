import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Deck from './Deck';
import {connect} from "react-redux";
import {handleInitialData} from "../actions/index";


export class DeckList extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const {decks, navigation} = this.props;
    console.log(decks,"rashmi");
    return (
      <View>
        {Object.values(decks).map(deck => {
          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() => navigation.push('DeckDetails')}>
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

export default connect(mapStateToProps, {handleInitialData})(DeckList);
