/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import { firebaseKeys } from './keys';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }
  componentWillMount() {
    firebase.initializeApp(firebaseKeys);


    firebase.auth().onAuthStateChanged(user => {
     if (user) {
       this.setState({ loggedIn: true });
     } else {
       this.setState({ loggedIn: false });
     }
   });
}

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <CardSection>
        <Button
          onPress={() =>
          firebase.auth().signOut()}
        >
          Log Out
        </Button>
      </CardSection>
      );
    case false:
      return <LoginForm />;
    default:
      return <View style={{ paddingTop: 100 }}><Spinner size="large" /></View>;
  }
}
render() {
    return (
      <View>
        <Header headerText="Authentication" />

          {this.renderContent()}
      </View>

    );
  }
}
