import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Button from "./Button";
import {exp} from "react-native-reanimated";

export class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleQuestionChange = (question) => {
    this.setState({question: question});
  }
  handleAnswerChange = (answer) => {
    this.setState({answer: answer});
  }

  render() {
    return(
      <View style={[styles.container]}>
        <View style={styles.contentBox}>
          <Text style={styles.title}>Add a card</Text>
        </View>
        <View style={styles.contentBox}>
          <TextInput style={styles.input} value={this.state.question} onChangeText={this.handleQuestionChange} placeholder="Enter Question"/>
        </View>

        <View style={styles.contentBox}>
          <TextInput style={styles.input} value={this.state.answer} onChangeText={this.handleAnswerChange} placeholder="Enter Answer"/>
        </View>
        <Button
          btnStyle={{backgroundColor: 'blue'}}
          onPress={() => {
            console.log("card added")
          }}
        >
          Submit
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

export default AddCard;
