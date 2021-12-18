import React, { Component } from 'react'
import { Card, Col, Container, InputGroup, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import Link from 'react-router-dom/Link'

class AnsweredQuestion extends Component {
    state = {
        optionOnePercentage: 0,
        optionTwoPercentage: 0
    }

    calculateOptionOnePercentage(optionOneVotes, optionTwoVotes) {
        return (100 * optionOneVotes) / (optionOneVotes + optionTwoVotes);
    }

    calculateOptionTwoPercentage(optionTwoVotes, optionOneVotes) {
        return (100 * optionTwoVotes) / (optionOneVotes + optionTwoVotes);
    }

    render() {
        return (
            <Container>
                <br></br>
                <Row>
                    <Col md="auto"> 
                    <form>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{this.props.question.author} asks: </Card.Title>
                                <Card.Text>
                                    <InputGroup>
                                        {this.props.question.optionOne.text}
                                    </InputGroup>
                                    <InputGroup>
                                        {this.props.question.optionTwo.text}
                                    </InputGroup>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Link to={`/question/${this.props.question.id}`}>View Poll</Link>
                            </Card.Body>
                        </Card>
                    </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ users, questions }, { id }) {
    const question = questions[id];
    return {
        question,
        optionOneVotes: question.optionOne.votes.length,
        optionTwoVotes: question.optionTwo.votes.length,
    }
}

export default connect(mapStateToProps)(AnsweredQuestion)