import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Button, Icon } from '@ant-design/react-native'

import NavigationService from '../services/NavigationService'

@connect()
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="home" size="md" color={focused ? tintColor : 'gray'} />
    )
  }

  gotoDetail = () => {
    NavigationService.navigate('Detail')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button type="ghost" onPress={this.gotoDetail}>
          Goto Detail
        </Button>
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

export default Home
