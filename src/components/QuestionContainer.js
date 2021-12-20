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
                <Accordion defaultActiveKey="2">
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
    const answeredIdList = user ? Object.keys(user['answers']) : [];
    const answeredIds = Object.keys(questions).filter(question => answeredIdList.includes(question)).sort((idOne, idTwo) => {
        const timestampOne = questions[idOne].timestamp;
        const timestampTwo = questions[idTwo].timestamp;
        return timestampTwo - timestampOne 
    });
    const unansweredIds = Object.keys(questions).filter(question => !answeredIds.includes(question)).sort((idOne, idTwo) => {
        const timestampOne = questions[idOne].timestamp;
        const timestampTwo = questions[idTwo].timestamp;
        return timestampTwo - timestampOne 
    });
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