import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Navigation, Card } from 'react-router-navigation'
import { Link } from 'react-router-native'

export default class Accounts extends Component {
  render() {
    return (
      <Navigation
        navBarStyle={{ backgroundColor: 'purple' }}
        titleStyle={{ color: 'white' }}>
        <Card
          exact path='/accounts'
          title='Accounts'
          render={() => (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Accounts</Text>
              <Link to='/test'><Text>Go To Test</Text></Link>
            </View>
          )}
        />
        <Card
          exact path='/test'
          title='Test'
          render={() => (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Test</Text>
            </View>
          )}
        />
      </Navigation>
    )
  }
}
