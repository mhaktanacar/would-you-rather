import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import '../App.css'
import AnsweredQuestion from './AnsweredQuestion'

class AnsweredQuestions extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>O
                    <Col md="auto">
                        <ol>
                            {this.props.answeredIds.map(id => (
                                <AnsweredQuestion id={id} />
                            ))}
                        </ol>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default connect()(AnsweredQuestions)