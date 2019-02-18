import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '@ant-design/react-native'

import NavigationService from '../services/NavigationService'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: 'Detail'
  }

  goBack = () => {
    NavigationService.back('Account')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button type="ghost" onPress={this.goBack}>
          Go Back
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

export default Detail
