import React from 'react';
import Button from 'react-bootstrap/Button'

class Question extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const answers = this.props.value.possible_answers.map((value, position) => {
      return (
        <div key={position + "_" + this.props.number}>
          <input onClick={() => { this.props.onClick(this.props.number, position) }}
            type="radio" id={position + "_" + this.props.number} name={this.props.number} value={value} />
          <label htmlFor={position + "_" + this.props.number}>{value}</label>
        </div>
      )
    })
    return (
      <div>
        <p>{this.props.number}. {this.props.value.question}</p>
        {answers}
      </div>
    )
  }

}


class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_answers: Array(this.props.objective_questions.length).fill(null),
      score: null
    }
  }
  render() {
    const questions = this.props.objective_questions.map((value, position) => {
      return <Question
        value={value}
        number={position + 1}
        onClick={(question_number, option_number) => this.handleSelectAnswer(question_number, option_number)} />
    })
    return (
      <div>
        {questions}
        <br></br>
        <Button variant="primary" onClick={() => this.evaluateAnswers()}>Submit</Button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          Score: {this.state.score}
        </div>
      </div>
    );
  }

  handleSelectAnswer(question_number, option_number) {
    // todo set the state
    console.log(`question: ${question_number}, option: ${option_number}`)
    var selected_answers = this.state.selected_answers
    selected_answers[question_number - 1] = option_number
    this.setState(
      {
        selected_answers: selected_answers
      }
    )
  }

  evaluateAnswers() {
    // compare selected to the actual correct answers
    var score = 0
    for (var i = 0; i < objective_questions.length; i++) {
      if (objective_questions[i].correct_option === this.state.selected_answers[i]) {
        score++;
      }
    }
    this.setState(
      {
        score: score
      }
    )
  }

}
export default Quiz;