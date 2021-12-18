import React, { Component } from 'react'
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }

    handleOptionOne = (event) => {
        const optionOne = event.target.value;
        this.setState({ optionOne: optionOne });
    }


    handleOptionTwo = (event) => {
        const optionTwo = event.target.value;
        this.setState({ optionTwo: optionTwo });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOne, optionTwo } = this.state
        const { dispatch, id } = this.props
        dispatch(handleAddQuestion(optionOne, optionOne))
        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: id ? false : true,
        }))
    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state
        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <br></br>
                <Card>
                    <Card.Body>
                        <Card.Title>Create New Question</Card.Title>
                        <Card.Text>
                            Complete the question:
                        </Card.Text>
                        <Card.Title>Would you rather...</Card.Title>
                        <InputGroup size="lg">
                            <InputGroup.Text id="inputGroup-sizing-lg"></InputGroup.Text>
                            <FormControl aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                type='text'
                                placeholder='Enter Option One Text Here'
                                value={optionOne}
                                onChange={this.handleOptionOne} />
                        </InputGroup>
                        <br></br>
                        OR
                        <br></br>
                        <br></br>
                        <InputGroup size="lg">
                            <InputGroup.Text id="inputGroup-sizing-lg"></InputGroup.Text>
                            <FormControl aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                type='text'
                                placeholder='Enter Option Two Text Here'
                                value={optionTwo}
                                onChange={this.handleOptionTwo} />
                        </InputGroup>
                        <br></br>
                        <form onSubmit={this.handleSubmit}>
                            <Button disabled={this.state.optionOne === '' || this.state.optionTwo === ''} type="submit"
                            >Submit</Button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion)