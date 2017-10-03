import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Card, CardSection, Button, LoadingSpinner } from './components/common'
import LoginForm from './components/LoginForm'
import firebase from 'firebase'

class App extends Component {
    constructor(props) {
        super(props)
        // null acts as a 3rd state, we don't know if user is logged in
        // true = logged in, false = definitely not logged in
        this.state = {
            loggedIn: null
        }
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDXsTV5mIPIBC4ucAvfQkGDyFZ7Fh5BbNM',
            authDomain: 'react-native-auth-a7316.firebaseapp.com',
            databaseURL: 'https://react-native-auth-a7316.firebaseio.com',
            projectId: 'react-native-auth-a7316',
            storageBucket: 'react-native-auth-a7316.appspot.com',
            messagingSenderId: '525367938708'
        })

        // this fires on both success or fail
        firebase.auth().onAuthStateChanged((user) => {
            if (user) return this.setState({ loggedIn: true })

            return this.setState({ loggedIn: false })
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Text style={styles.welcomeHeader}>You are logged in.</Text>
                        </CardSection>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                )

            case false:
                return <LoginForm />

            default:
                return (
                    <Card>
                        <CardSection>
                            <LoadingSpinner size="large" />
                        </CardSection>
                    </Card>
                )
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

const styles = {
    welcomeHeader: {
        padding: 5
    }
}

export default App