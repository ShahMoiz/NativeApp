import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import MainTabs from '../indexTabs/main';


class AuthScreen extends Component {
    loginhandler = () => {
        // alert("Login")
        MainTabs()
    }
    render(){
        return(
            <View>
                <Text>Auth Running</Text>
                <Button 
                    title="Login"
                    onPress={this.loginhandler}
                />
            </View>
        )
    }
}

export default AuthScreen