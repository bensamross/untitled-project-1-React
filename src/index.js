import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import PlansPricing from './views/plans-pricing'
import OurMission from './views/our-mission'
import Home from './views/home'
import HowItWorks from './views/how-it-works'
import Error404 from './views/error404'
import JoinOurNetwork from './views/join-our-network'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={PlansPricing} exact path="/plans-pricing" />
        <Route component={OurMission} exact path="/our-mission" />
        <Route component={Home} exact path="/" />
        <Route component={HowItWorks} exact path="/how-it-works" />
        <Route component={Error404} path="**" />
        <Route component={JoinOurNetwork} exact path="/join-our-network" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
