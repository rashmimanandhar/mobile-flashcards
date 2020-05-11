import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import TextButton from "./TextButton";
import Button from "./Button";
import {connect} from "react-redux";
import {red, white} from "../utils/colors";
import {green} from "color-name";

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
    if(ans === ANSWER.Correct){
      this.setState({correct: this.state.correct + 1})
    } else{
      this.setState({incorrect: this.state.incorrect + 1})
    }
    this.move();
  }

  reset = () => {
    this.setState({correct:0, incorrect: 0, page: 0});
    this.viewPager.current.setPage(0);
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
              <View style={[styles.block, styles.questionContainer]}>
                <Text style={styles.questionText}>
                  {currentView === SCREEN.Question ? 'Question' : 'Answer'} {index + 1} / {questions.length}
                </Text>
                <View style={styles.questionWrapper}>
                  <Text style={styles.title}>
                    {currentView === SCREEN.Question
                      ? question.question
                      : question.answer}
                  </Text>
                </View>
              </View>
              {currentView === SCREEN.Question ? (
                <TextButton
                  txtStyle={{color: red}}
                  onPress={() => this.setState({currentView: SCREEN.Answer})}
                >
                  Answer
                </TextButton>
              ) : (
                <TextButton
                  txtStyle={{color: red}}
                  onPress={() => this.setState({currentView: SCREEN.Question})}
                >
                  Question
                </TextButton>
              )}
              <View>
                <Button
                  btnStyle={{backgroundColor: green, borderColor: white}}
                  onPress={() => this.handleAnswer(ANSWER.Correct)}
                >
                  Correct
                </Button>
                <Button
                  btnStyle={{backgroundColor: red, borderColor: white}}
                  onPress={() => this.handleAnswer(ANSWER.Incorrect)}
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
              <Text style={[styles]}>Correct Answers</Text>
              <Text style={[styles.number]}>{this.state.correct} ({this.state.correct/questions.length*100}%)</Text>
            </View>
            <View style={styles.contentBox}>
              <Text style={[styles]}>Incorrect Answers</Text>
              <Text style={[styles.number]}>{this.state.incorrect} ({this.state.incorrect/questions.length*100}%)</Text>
            </View>
            <Button
              btnStyle={{backgroundColor: red, borderColor: white}}
              onPress={() => this.reset()}>
              Start Over
            </Button>
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
