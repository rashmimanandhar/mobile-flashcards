import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Button from './Button';
import {connect} from "react-redux";
import {addDeck} from "../actions/index";
import {saveDeckTitle} from "../utils/api";
import {green, textColor, white} from "../utils/colors";

export class AddDeck extends Component {
  state = {
    title: ''
  }

  handleChange = (text) => {
    this.setState({title: text})
  }

  handleOnSubmit = () => {
    const {dispatch, navigation} = this.props;
    dispatch(addDeck(this.state.title));

    saveDeckTitle(this.state.title).then(() => {
    });
    this.setState({title: ''})
    navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <Text style={styles.title}>What is the title of your deck?</Text>
        </View>
        <View style={styles.contentBox}>
          <TextInput style={styles.input} value={this.state.title} onChangeText={this.handleChange}/>
        </View>
        <Button
          btnStyle={{backgroundColor: green}}
          btnTextStyle={{color: white}}
          onPress={this.handleOnSubmit}
          disabled={this.state.title === ''}
        >
          Create Deck
        </Button>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  contentBox: {
    margin: 10
  },
  title: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 25,
    color: textColor
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    height: 50
  },

})

export default connect()(AddDeck);
