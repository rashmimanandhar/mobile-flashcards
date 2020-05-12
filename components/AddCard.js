import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Button from "./Button";
import {addCardToDeck} from "../utils/api";
import {connect} from "react-redux";
import {addCard} from "../actions";
import {backgroundGrey, green, white} from "../utils/colors";

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

  handleOnSubmit = () => {
    const {dispatch, route, navigation} = this.props;
    const title = route.params.title;
    const card = {
      question: this.state.question,
      answer: this.state.answer
    }

    dispatch(addCard(title, card));
    addCardToDeck(title, card);
    this.setState({question: '', answer: ''});
    navigation.goBack();
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.contentBox}>
          <Text style={styles.title}>Add a card</Text>
        </View>
        <View style={styles.contentBox}>
          <TextInput style={styles.input} value={this.state.question} onChangeText={this.handleQuestionChange}
                     placeholder="Enter Question"/>
        </View>
        <View style={styles.contentBox}>
          <TextInput style={styles.input} value={this.state.answer} onChangeText={this.handleAnswerChange}
                     placeholder="Enter Answer"/>
        </View>
        <Button
          btnStyle={{backgroundColor: green}}
          btnTextStyle={{color: white}}
          onPress={this.handleOnSubmit}
          disabled={this.state.question === '' || this.state.answer === ''}
        >
          Submit
        </Button>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentBox: {
    marginBottom: 20
  },
  title: {
    fontSize: 25,
    alignSelf: 'center'

  },
  input: {
    borderWidth: 1,
    borderColor: backgroundGrey,
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    fontSize: 15,
    height: 50,
  },

})

export default connect()(AddCard);
