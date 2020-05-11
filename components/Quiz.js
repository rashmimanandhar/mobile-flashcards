import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import TextButton from "./TextButton";
import Button from "./Button";
import {connect} from "react-redux";
import {red, white} from "../utils/colors";
import {green} from "color-name";

const screen = {
  Question: 'Question',
  Answer: 'Answer',
  Result: 'Result'
}

const answer = {
  Correct: 'Correct',
  Incorrect: 'Incorrect'
}

export class Quiz extends Component {
  viewPager = React.createRef();
  state = {
    currentView: screen.Question,
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


  handleAnswer = (answer) => {
    this.move();
  }
  render() {

    const {dispatch, route, navigation} = this.props;
    const title = route.params.deck.deck.title;
    const deck = route.params.deck.deck;
    const questions = route.params.deck.deck.questions;
    const {currentView} = this.state;

    return (
      <View style={{flex: 1}}>
        <ViewPager ref={this.viewPager} style={styles.viewPage} initialPage={0} scrollEnabled={false}>
          {questions.map((question, index) => (
            <View style={styles.pageStyle} key={index}>
              <View style={styles.block}>
                <Text style={styles.count}>
                  {index + 1} / {questions.length}
                </Text>
              </View>
              <View style={[styles.block, styles.questionContainer]}>
                <Text style={styles.questionText}>
                  {screen === screen.question ? 'Question' : 'Answer'}
                </Text>
                <View style={styles.questionWrapper}>
                  <Text style={styles.title}>
                    {currentView === screen.Question
                      ? question.question
                      : question.answer}
                  </Text>
                </View>
              </View>
              {currentView === screen.Question ? (
                <TextButton
                  txtStyle={{color: red}}
                  onPress={() => this.setState({currentView: screen.Answer})}
                >
                  Answer
                </TextButton>
              ) : (
                <TextButton
                  txtStyle={{color: red}}
                  onPress={() => this.setState({currentView: screen.Question})}
                >
                  Question
                </TextButton>
              )}
              <View>
                <Button
                  btnStyle={{backgroundColor: green, borderColor: white}}
                  onPress={() => this.handleAnswer(answer.Correct)}
                  // disabled={this.state.answered[index] === 1}
                >
                  Correct
                </Button>
                <Button
                  btnStyle={{backgroundColor: red, borderColor: white}}
                  onPress={() => this.handleAnswer(answer.Incorrect)}
                  // disabled={this.state.answered[index] === 1}
                >
                  Incorrect
                </Button>
              </View>
            </View>

          ))}
          <View style={styles.pageStyle} key={questions.length}>
            <View style={styles.contentBox}>
              <Text style={styles.title}>Quiz Complete</Text>
            </View>
            <View style={styles.contentBox}>
              <Text style={[styles]}>Number of questions answered correctly</Text>
              <Text style={[styles.number]}>5</Text>
            </View>
          </View>
        </ViewPager>
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
  number: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center'
  },
  viewPage: {
    flex: 1,
  },
  pageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default connect()(Quiz);
