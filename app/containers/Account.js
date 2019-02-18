import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Button, Icon } from '@ant-design/react-native'

import NavigationService from '../services/NavigationService'
import { createAction } from '../utils'

@connect(({ app }) => ({ ...app }))
class Account extends Component {
  static navigationOptions = {
    tabBarLabel: 'Account',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="user" size="md" color={focused ? tintColor : 'gray'} />
    )
  }

  gotoLogin = () => {
    NavigationService.navigate('Login')
  }

  logout = () => {
    this.props.dispatch(createAction('app/logout')())
  }

  render() {
    const { login } = this.props
    return (
      <View style={styles.container}>
        {login ? (
          <Button type="ghost" onPress={this.logout}>
            Logout
          </Button>
        ) : (
          <Button type="ghost" onPress={this.gotoLogin}>
            Goto Login
          </Button>
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
  }
})

export default Account
