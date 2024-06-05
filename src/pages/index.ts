import React from 'react'
// offline page must to load, cant load lazy.
// because when website has been lost connection, it cant load data of offline page
import Offline from './offline'

// use lazy function to lazy load
const Login = React.lazy(() => import('./login'))
const Filter = React.lazy(() => import('./filter'))
const NotFound = React.lazy(() => import('./not.found'))

const Pages = {
  Login,
  Filter,
  NotFound,
  Offline
}

export default Pages
