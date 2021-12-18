import React, { Component } from 'react'
import { Card, Col, ProgressBar, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddQuestionAnswer } from '../actions/questions'

class Question extends Component {
    constructor() {
        super();
        this.state = {
            optionOnePercentage: 0,
            optionTwoPercentage: 0,
            answer: '',
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    calculateOptionOnePercentage(optionOneVotes, optionTwoVotes) {
        return (100 * optionOneVotes) / (optionOneVotes + optionTwoVotes);
    }

    calculateOptionTwoPercentage(optionTwoVotes, optionOneVotes) {
        return (100 * optionTwoVotes) / (optionOneVotes + optionTwoVotes);
    }

    onValueChange(event) {
        this.setState({ answer: event.target.value });
    }

    formSubmit(event) {
        event.preventDefault();
        const { answer } = this.state
        const { dispatch, question, authedUser } = this.props
        const id = question.id;
        dispatch(handleAddQuestionAnswer({
            authedUser,
            id,
            answer,
        }))
    }

    render() {
        console.log(this.props.authedUser)
        return (
            <div class="App">
                <br></br>
                <form onSubmit={this.formSubmit}>
                    <Card style={{ width: '36rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.question.author} asks: </Card.Title>
                            <Card.Text>
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="optionOne"
                                            checked={this.state.answer === "optionOne"}
                                            onChange={this.onValueChange}
                                        />
                                        {this.props.question.optionOne.text}
                                    </label>
                                    <Col>
                                        {
                                            this.props.answered === true ?
                                                <Row>
                                                    <ProgressBar now={this.calculateOptionOnePercentage(this.props.optionOneVotes, this.props.optionTwoVotes)}
                                                        label={`${this.calculateOptionOnePercentage(this.props.optionOneVotes, this.props.optionTwoVotes)}%`} />
                                                </Row>
                                                : null
                                        }
                                    </Col>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="optionTwo"
                                            checked={this.state.answer === "optionTwo"}
                                            onChange={this.onValueChange}
                                        />
                                        {this.props.question.optionTwo.text}
                                        <Col>
                                            {
                                                this.props.answered === true ?
                                                    <Row>
                                                        <ProgressBar now={this.calculateOptionTwoPercentage(this.props.optionTwoVotes, this.props.optionOneVotes)}
                                                            label={`${this.calculateOptionTwoPercentage(this.props.optionTwoVotes, this.props.optionOneVotes)}%`} />
                                                    </Row>
                                                    : null
                                            }
                                        </Col>
                                    </label>
                                </div>
                                <button disabled={this.props.answered} className="btn btn-default" type="submit">
                                    Submit
                                </button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }, props) {
    const { id } = props.match.params
    const user = users[authedUser];
    const question = questions[id];
    const answered = Object.keys(user['answers']).includes(question.id) ? true : false
    return {
        question,
        id,
        answered,
        authedUser,
        user,
        optionOneVotes: question.optionOne.votes.length,
        optionTwoVotes: question.optionTwo.votes.length,
    }
}

export default connect(mapStateToProps)(Question)