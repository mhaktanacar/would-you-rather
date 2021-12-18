import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { connect } from 'react-redux'
import { handleAuthedUser } from '../actions/authedUser'
import '../App.css'
import { Card, Container, Row, Col } from 'react-bootstrap'

class LogIn extends Component {
    state = {
        selectedUser: 'Select User'
    }

    handleSelect = (event) => {
        const user = event
        this.setState({ selectedUser: user });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { selectedUser } = this.state
        const { dispatch } = this.props
        dispatch(handleAuthedUser(selectedUser))
        this.setState(() => ({
            selectedUser: ''
        }))
    }

    render() {
        return (
            <Container>
                <br></br>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <Card className="text-center">
                            <Card.Header>Would You Rather? </Card.Header>
                            <Card.Body>
                                <Card.Title>Please sign in to continue</Card.Title>
                                <Card.Text>
                                    <DropdownButton id="dropdown-basic-button" title={this.state.selectedUser} onSelect={this.handleSelect}>
                                        {Object.keys(this.props.users).map(user => (
                                            <DropdownItem eventKey={user}>{user}</DropdownItem>
                                        ))}
                                    </DropdownButton>

                                </Card.Text>
                                <form onSubmit={this.handleSubmit}>
                                    <Button variant="success" type="submit">Sign In</Button>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        users,
        authedUser,
    }
}

export default connect(mapStateToProps)(LogIn)