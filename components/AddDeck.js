import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Button from './Button';

export class AddDeck extends Component {
  state = {
    title: ''
  }

  handleChange = (text) => {
    this.setState({title: text})
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
          onPress={() => {
            console.log("pressed")
          }}
        >
          Create Deck
        </Button>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
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

export default AddDeck;
