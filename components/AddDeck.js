import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';

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
        <View style={[styles.contentBox, styles.btnContainer]}>
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.btnText}>Create Deck</Text>
          </TouchableOpacity>
        </View>
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
    alignSelf:'center',
    fontSize: 30
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    padding:10,
    borderRadius: 5,
    fontSize: 20,
    height: 50
  },
  submitBtn: {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default AddDeck;
