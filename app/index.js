import React from 'react'
import { AppRegistry } from 'react-native'

import dva from './utils/dva'
import Router from './router'
import appModel from './models/app'

const app = dva({
  initialState: {},
  models: [appModel],
  onError(e) {
    console.log('onError', e)
  }
})

const App = app.start(<Router />)

AppRegistry.registerComponent('DvaStarter', () => App)
