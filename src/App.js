import React, { Component } from 'react'
import { NativeRouter, Route, Switch, Redirect } from 'react-router-native'
import { BottomNavigation, Tab } from 'react-router-navigation'
import Accounts from './modules/Accounts'
import Profile from './modules/Profile'

export default class App extends Component<{}> {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/accounts" />} />
          <Route
            path="/"
            render={() => (
              <BottomNavigation
                lazy={false}
                tabActiveTintColor="blue">
                <Tab label="Accounts" path="/accounts" component={Accounts} />
                <Tab label="Profile" path="/profile" component={Profile} />
              </BottomNavigation>
            )}
          />
        </Switch>
      </NativeRouter>
    )
  }
}
