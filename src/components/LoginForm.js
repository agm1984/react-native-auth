import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input, LoadingSpinner } from './common'
import firebase from 'firebase'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    }

    handleLogin() {
        const { email, password } = this.state

        this.setState({ error: '', loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.onLoginSuccess())
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => this.onLoginSuccess())
                    .catch(() => this.onLoginFail())
            })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication failed.',
            loading: false
        })
    }

    renderButton() {
        if (this.state.loading) return <LoadingSpinner size="small" />

        return (
            <Button onPress={() => this.handleLogin()}>
                Login
            </Button>
        )
    }

    render() {
        const { errorTextStyle } = styles

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="eg: user@gmail.com"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        autoCorrect={false}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        autoCorrect={false}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm
