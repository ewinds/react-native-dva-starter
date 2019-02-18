import React, { Component } from 'react'
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '@ant-design/react-native'
import { Touchable } from '../components'

import { createAction } from '../utils'
import NavigationService from '../services/NavigationService'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  onLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  onClose = () => {
    NavigationService.back()
  }

  render() {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <Button type="ghost" onPress={this.onLogin}>
            Login
          </Button>
        )}
        {!fetching && (
          <Touchable style={styles.close} onPress={this.onClose}>
            <Image
              style={styles.icon}
              source={require('../images/close.png')}
            />
          </Touchable>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 30
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'gray'
  }
})

export default Login
