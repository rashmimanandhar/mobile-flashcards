import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import TextButton from "./TextButton";
import Button from "./Button";
import {backgroundGrey, blue, green, red, textColor, white} from "../utils/colors";

const SCREEN = {
  Question: 'Question',
  Answer: 'Answer',
  Result: 'Result'
}

const ANSWER = {
  Correct: 'Correct',
  Incorrect: 'Incorrect'
}

export class Quiz extends Component {
  viewPager = React.createRef();
  card = React.createRef();
  state = {
    currentView: SCREEN.Question,
    correct: 0,
    incorrect: 0,
    questionNum: 0,
    questionCount: this.props.route.params.deck.deck.questions.length,
    page: 0
  }
  move = () => {
    this.viewPager.current.setPage(this.state.page + 1);
    this.setState({
      page: this.state.page + 1
    });
  }


  handleAnswer = (ans) => {
    if (ans === ANSWER.Correct) {
      this.setState({correct: this.state.correct + 1})
    } else {
      this.setState({incorrect: this.state.incorrect + 1})
    }
    this.move();
  }

  reset = () => {
    this.setState({correct: 0, incorrect: 0, page: 0});
    this.viewPager.current.setPage(0);
  }

  render() {

    const {route, navigation} = this.props;
    const questions = route.params.deck.deck.questions;
    const {currentView} = this.state;

    return (
      <View style={{flex: 1}}>
        <ViewPager ref={this.viewPager} style={[styles.viewPage, styles.centerContainer]} initialPage={0} scrollEnabled={false}>
          {questions.map((question, index) => (
            <ScrollView  key={index} contentContainerStyle={styles.centerContainer}>
            <View style={{marginTop: 20}}  key={index}>
              <View style={styles.centerContainer}>
                <Text style={styles.questionText}>
                  {currentView === SCREEN.Question ? 'Question' : 'Answer'} {index + 1} / {questions.length}
                </Text>
                <View style={[styles.centerContainer, styles.cardBox]}>
                  <Text style={styles.title}>
                    {currentView === SCREEN.Question
                      ? question.question
                      : question.answer}
                  </Text>
                </View>
              </View>
                <TextButton
                  btnTextStyle={{color: red}}
                  onPress={() => {
                    this.setState({currentView: currentView === SCREEN.Question ? SCREEN.Answer : SCREEN.Question});
                  }}
                >
                  {currentView === SCREEN.Question ?'Answer': 'Question'}
                </TextButton>
              <View>
                <Button
                  btnStyle={{backgroundColor: green}}
                  btnTextStyle={{color: white}}
                  onPress={() => this.handleAnswer(ANSWER.Correct)}
                >
                  Correct
                </Button>
                <Button
                  btnStyle={{backgroundColor: red}}
                  btnTextStyle={{color: white}}
                  onPress={() => this.handleAnswer(ANSWER.Incorrect)}
                >
                  Incorrect
                </Button>
              </View>
            </View>
            </ScrollView>
          ))}
          <View style={styles.centerContainer} key={questions.length}>
            <View style={styles.contentBox}>
              <Text style={styles.title}>Quiz Complete</Text>
            </View>
            <View style={styles.contentBox}>
              <Text style={[styles.questionText, {marginBottom: 5}]}>Correct Answers</Text>
              <Text
                style={[styles.number, {color: green}]}>{this.state.correct} ({this.state.correct / questions.length * 100}%)</Text>
            </View>
            <View style={styles.contentBox}>
              <Text style={[styles.questionText, {marginBottom: 5}]}>Incorrect Answers</Text>
              <Text
                style={[styles.number, {color: red}]}>{this.state.incorrect} ({this.state.incorrect / questions.length * 100}%)</Text>
            </View>
            <Button
              btnStyle={{backgroundColor: white, borderWidth: 1, borderColor: green}}
              btnTextStyle={{color: green}}
              onPress={() => this.reset()}>
              Start Over
            </Button>
            <TextButton btnTextStyle={{color: blue}} onPress={()=> navigation.goBack()}>Back to Deck</TextButton>
          </View>
        </ViewPager>
      </View>
    )


  }

}

const styles = StyleSheet.create({
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentBox: {
    marginBottom: 20
  },
  title: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    fontSize: 25,
    color: textColor,
    textAlign: 'center'
  },
  number: {
    color: red,
    fontSize: 20,
    textAlign: 'center'
  },
  viewPage: {
    flex: 1,
  },
  cardContainer: {
    padding:10
  },
  cardBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: backgroundGrey,
    backgroundColor: white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  questionText: {
    marginBottom: 20,
    fontSize: 18,
    color: textColor
  }
})
export default Quiz;
