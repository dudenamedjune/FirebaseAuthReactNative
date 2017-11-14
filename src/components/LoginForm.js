import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFail = this.onFail.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onSuccess)
          .catch(this.onFail);
      });
  }

  onSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onFail() {
      this.setState({ error: 'Authentication Failed!', loading: false });
  }

  render() {
    return (
    <Card>
      <CardSection>
        <Input
          placeholder="user@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
      </CardSection>
      <Text style={styles.errorTextStyle}>
        {this.state.error}
      </Text>
      <CardSection>
        { this.state.loading ? <Spinner /> : <Button onPress={this.onButtonPress}>
          Log In
        </Button> }
      </CardSection>
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;
