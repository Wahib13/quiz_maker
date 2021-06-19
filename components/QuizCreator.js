import React from 'react';
import Link from 'next/link'
import Question from '../components/Question'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Home.module.css'

class QuizCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objective_questions: [
        {
          question: "",
          possible_answers: [],
          correct_option: 0,
          new_option: ""
        }
      ],
    }
  }
  render() {
    const question_components = this.state.objective_questions.map((question, number) => {
      return (
        <div className={styles.question}>
          <Question question={question.question}
              number={number}
              possible_answers={question.possible_answers}
              onQuestionChange={(e) => this.onQuestionChange(e)}
              onPossibleAnswerChange={(e) => this.onPossibleAnswerChange(e)}
              new_option={question.new_option}
              onSubmit={(e) => this.handleSubmit(e)}
              onDropdownChange={(e) => this.onDropdownChange(e)} />
        </div>
      )
    })

    return (
      <div>
          <Link href={{ pathname: '/answer_question', query: { data: JSON.stringify(this.state.objective_questions) } }}>
            <Button variant="outline-primary">Test the quiz</Button>
          </Link>
        <div className={styles.main}>
          {question_components}
        </div>
        <div>
          <Button variant="primary" type="submit" onClick={() => this.onAddQuestion()}>Add question</Button>
        </div>
      </div>
    );
  }

  onQuestionChange(e) {
    console.log(`updated ${e.target.id}`)
    var new_objective_questions = this.state.objective_questions
    new_objective_questions[e.target.id].question = e.target.value
    this.setState(
      {
        objective_questions: new_objective_questions
      }
    )
  }

  onAddQuestion() {
    var new_objective_questions = this.state.objective_questions
    new_objective_questions.push({
      question: "",
      possible_answers: []
    })
    this.setState(
      {
        objective_questions: new_objective_questions
      }
    )
  }

  onPossibleAnswerChange(e) {
    var new_objective_questions = this.state.objective_questions
    new_objective_questions[e.target.id].new_option = e.target.value
    this.setState(
      {
        objective_questions: new_objective_questions
      }
    )
    console.log(this.state)
  }

  onDropdownChange(e) {
    console.log(`dropdown ${e.target.id} changed to ${e.target.value}`)
    var new_objective_questions = this.state.objective_questions
    new_objective_questions[e.target.id].correct_option = parseInt(e.target.value)
    this.setState(
      {
        objective_questions: new_objective_questions
      }
    )
    console.log(this.state)
  }

  handleSubmit(event) {

    var new_objective_questions = this.state.objective_questions
    
    var new_question = this.state.objective_questions[event.target.id]
    new_question.possible_answers.push(new_question.new_option)
    new_question.new_option = ""

    new_objective_questions[event.target.id] = new_question

    this.setState(
      {
        objective_questions: new_objective_questions
      }
    )
    console.log(this.state)
    event.preventDefault();
  }

}
export default QuizCreator;