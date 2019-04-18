import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from "react-native-navigation";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

class FindPlacesScreen extends Component {
    constructor(props){
        super(props);
        // Navigation.events().bindComponent(this);
    }
    // a =  AntDesignIcon.getImageSource("bars", 30, 'black')
    static get options() {
        // Promise.all([
        //     AntDesignIcon.getImageSource("bars", 30, 'black')
        // ]).then (source => {
            return {
            topBar: {
                title: {
                    text: 'View Awesome Places'
                },
                subtitle: {
                    text: 'Check out Best Places in your Town',
                    color: 'gray'
                },
                // leftButtons: [{
                //     id: 'sideDraw',
                //     component: {
                //         name: 'Awesome-places.AuthScreen',
                //     },
                //     passProps: {
                //         myFunctions: () => Navigation.mergeOptions('sideDraw', {
                //             sideMenu: {
                //                 left: {
                //                 visible: true
                //                 }
                //             }
                //             })
                //     }
                    
                // }]
            }
        }
        // });
      }

    myFunction = () => {
        Navigation.mergeOptions('sideDraw', {
            sideMenu: {
              left: {
                visible: true
              }
            }
          });
    }
    render(){
        return (
            <View>
                <Text>Find Places Run</Text>
                <Button 
                    title="Check"
                    onPress={this.myFunction}
                />
            </View>
        )
    }
}

export default FindPlacesScreen;