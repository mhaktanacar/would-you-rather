import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LeaderBoard from './LeaderBoard'
import LogIn from './LogIn'
import Navigation from './Navigation'
import NewQuestion from './NewQuestion'
import NotFound from './NotFound'
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
                    <Switch>
                      <Route path='/' exact component={QuestionContainer} />
                      <Route path='/add' exact component={NewQuestion} />
                      <Route path='/leaderboard' component={LeaderBoard} />
                      <Route path='/questions/:id' component={Question} />
                      <Route component={NotFound} />
                    </Switch>
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
