import './App.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import FetchIntervalContainer from './Modules/FetchInterval/Container/FetchIntervalContainer'
import FetchUserContainer from './Modules/FetchUser/Container/FetchUserContainer'
import React from 'react'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={FetchUserContainer} />
          <Route exact path="/auto" component={FetchIntervalContainer} />
        </Switch>
      </Router>
    </>
  )
}

export default App
