import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'
import { connect } from 'react-redux'
import '../App.css'
import AnsweredQuestions from './AnsweredQuestions'
import UnansweredQuestions from './UnansweredQuestions'

class QuestionContainer extends Component {
    render() {
        return (
            <div class="App">
                <br></br>
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Answered Questions</Accordion.Header>
                        <Accordion.Body>
                            <AnsweredQuestions answeredIds={this.props.answeredIds} />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Unanswered Questions</Accordion.Header>
                        <Accordion.Body>
                            <UnansweredQuestions unansweredIds={this.props.unansweredIds} />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser, users }) {
    const user = users[authedUser];
    const answeredIds = user ? Object.keys(user['answers']) : [];
    const unansweredIds = Object.keys(questions).filter(question => !answeredIds.includes(question.id))
    return {
        questionsIds: Object.keys(questions),
        answeredIds,
        questions,
        authedUser,
        user,
        unansweredIds,
    }
}

export default connect(mapStateToProps)(QuestionContainer)