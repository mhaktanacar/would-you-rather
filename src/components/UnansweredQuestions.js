import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import UnansweredQuestion from './UnansweredQuestion'

class UnansweredQuestions extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col md="auto">
                        <ol>
                            {this.props.unansweredIds.map(id => (
                                <UnansweredQuestion id={id} />
                            ))}
                        </ol>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default connect()(UnansweredQuestions)