import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import User from './User'

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                <br></br>
                <ListGroup as="ol" numbered>
                    {this.props.userIds.map(id => (
                        <User id={id} />
                    ))}
                </ListGroup>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    const sortedUsers = Object.keys(users).sort((idOne, idTwo) => {
        const pointOne = Object.keys(users[idOne].answers).length + users[idOne].questions.length;
        const pointTwo = Object.keys(users[idTwo].answers).length + users[idTwo].questions.length;
        return pointTwo - pointOne;
    })
    return {
        userIds: sortedUsers,
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)