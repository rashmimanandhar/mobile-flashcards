import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Button from './Button';
import {connect} from "react-redux";
import {addDeck} from "../actions/index";
import {saveDeckTitle} from "../utils/api";

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
      console.log(this.state.title);
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
          btnStyle={{backgroundColor: 'gray'}}
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
  container: {},
  contentBox: {
    marginBottom: 20
  },
  title: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 50
  },

})

export default connect()(AddDeck);
