import React from 'react'
import Button from 'react-bootstrap/Button'

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const possible_answers = this.props.possible_answers.map((answer) => {
            return (
                <li>{answer}</li>
            )
        })
        const select_answer_options = this.props.possible_answers.map((answer, position) => {
            return (
                <option value={position}>{(position + 1 + 9).toString(36)}</option>
            )
        })
        return (
            <div>
                <form id={this.props.number} onSubmit={(e) => this.handleSubmit(e)}>
                    <textarea type="text" placeholder="enter a question" value={this.props.question} id={this.props.number}
                        onChange={(e) => this.handleChange(e)} />
                    <select id={this.props.number} onChange={(e) => this.handleDropdownChange(e)}>
                        {select_answer_options}
                    </select>
                    <div>
                        <ol type="a">{possible_answers}</ol>
                    </div>
                    <input type="text" id={this.props.number} value={this.props.new_option} onChange={(e) => this.handlePossibleAnswerChange(e)} />
                    <div>
                        <Button variant="outline-primary" type="submit">Add possible answer</Button>
                    </div>
                </form>
            </div>
        )
    }

    handlePossibleAnswerChange(e) {
        this.props.onPossibleAnswerChange(e)
    }

    handleChange(e) {
        this.props.onQuestionChange(e)
    }

    handleDropdownChange(e) {
        this.props.onDropdownChange(e)
    }

    handleSubmit(e) {
        this.props.onSubmit(e)
    }
}

export default Question;