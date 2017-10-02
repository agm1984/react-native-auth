import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from './components/common'
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
                <Text>An app!</Text>
            </View>
        )
    }
}

export default App