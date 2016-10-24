// routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Store
import AppStore from './stores/AppStore'

// Main component
import App from './components/App'

// Pages
import Default from './components/Pages/Default'
import Home from './components/Pages/Home'

export default (
  <Route path="/" data={AppStore.data} component={App}>
    <IndexRoute component={Home}/>
    <Route path="*" component={Default}/>
  </Route>
)
