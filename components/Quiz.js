import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextButton from "./TextButton";
import Button from "./Button";
import {connect} from "react-redux";

export class Quiz extends Component {
  state = {
    screen: 'Question'
  }

  render() {
    const {dispatch, route, navigation} = this.props;
    const title = route.params.title
    switch (this.state.screen) {
      case "Question":
        return (
          <View style={styles.container}>
            <View style={styles.contentBox}>
              <Text style={styles.title}>Question</Text>
            </View>
            <TextButton onPress={() => {this.setState({screen:'Answer'})}}>
              Go to Answer
            </TextButton>
            <View>
              <Button onPress={() => console.log('press correct')} btnStyle={{backgroundColor:'green'}}>Correct</Button>
              <Button onPress={() => console.log('press incorrect')} btnStyle={{backgroundColor:'red'}}>Incorrect</Button>
            </View>
          </View>
        )
      case "Answer":
        return (
          <View style={styles.container}>
            <View style={styles.contentBox}>
              <Text style={styles.title}>Answer</Text>
            </View>
            <TextButton onPress={() => {this.setState({screen:'Question'})}}>
              Go to Question
            </TextButton>
            <View>
              <Button onPress={() => console.log('press correct')} btnStyle={{backgroundColor:'green'}}>Correct</Button>
              <Button onPress={() => console.log('press incorrect')} btnStyle={{backgroundColor:'red'}}>Incorrect</Button>
            </View>
          </View>
        )
      default:
        return (
          <View style={styles.container}>
            <View style={styles.contentBox}>
              <Text style={styles.title}>Quiz Complete</Text>
            </View>
            <View style={styles.contentBox}>
              <Text style={[styles]}>Number of questions answered correctly</Text>
              <Text style={[styles.number]}>5</Text>
            </View>
          </View>
        )
    }

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
  number:{
    color: 'red',
    fontSize: 20,
    textAlign: 'center'
  }
})
export default connect()(Quiz);
