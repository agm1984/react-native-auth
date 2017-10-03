import React, { Component } from 'react'
import { View } from 'react-native'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'
import firebase from 'firebase'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDXsTV5mIPIBC4ucAvfQkGDyFZ7Fh5BbNM',
            authDomain: 'react-native-auth-a7316.firebaseapp.com',
            databaseURL: 'https://react-native-auth-a7316.firebaseio.com',
            projectId: 'react-native-auth-a7316',
            storageBucket: 'react-native-auth-a7316.appspot.com',
            messagingSenderId: '525367938708'
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}

export default App