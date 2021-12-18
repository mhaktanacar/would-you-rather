import React, { Component } from 'react'
import { Badge, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'

class User extends Component {
    render() {
        return (
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">
                        {this.props.user.name}
                    </div>
                    Answered Questions: {Object.keys(this.props.user.answers).length}
                    <br></br>
                    Created Questions: {this.props.user.questions.length}
                </div>
                <Badge variant="primary" pill>
                    {Object.keys(this.props.user.answers).length + this.props.user.questions.length}
                </Badge>
            </ListGroup.Item>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    const user = users[id];
    return {
        user,
    }
}

export default connect(mapStateToProps)(User)