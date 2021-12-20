import React, { Component } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleAuthedUser } from '../actions/authedUser'

class Navigation extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(handleAuthedUser(null))
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Would You Rather?</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/add">New Question</Nav.Link>
                            <Nav.Link as={Link} to="/leaderboard">Leader Board</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>Hello, {this.props.authedUser}</Nav.Link>
                            <form onSubmit={this.handleSubmit}>
                                <Button variant="secondary" size="sm" type="submit">Logout</Button>
                            </form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(Navigation)