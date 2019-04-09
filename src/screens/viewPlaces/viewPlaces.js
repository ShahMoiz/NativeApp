import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
class ViewPlacesScreen extends Component {
    render(){
        return (
            <View>
                <Text>View Places Run</Text>
                <Icon name="map-marker" size={30} />
            </View>
        )
    }
}

export default ViewPlacesScreen;