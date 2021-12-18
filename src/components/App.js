import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LeaderBoard from './LeaderBoard'
import LogIn from './LogIn'
import Navigation from './Navigation'
import NewQuestion from './NewQuestion'
import Question from './Question'
import QuestionContainer from './QuestionContainer'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          {this.props.loading === true
            ? <LogIn />
            : <div>
              <Container>
                <Row>
                  <Col></Col>
                  <Col xs={6}>
                    <Route path='/' exact component={QuestionContainer} />
                    <Route path='/new' exact component={NewQuestion} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route path='/question/:id' component={Question} />
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </div>}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
