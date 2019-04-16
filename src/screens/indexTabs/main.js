import React, {Component} from 'react';
// import { Promise } from 'react-native';
import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MainTabs = () =>{
    Promise.all([
    Icon.getImageSource("map-marker", 30, 'red'),
    Icon.getImageSource("view-dashboard", 30, 'blue')
    ]).then(img => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [{
                        stack: {
                            children: [{
                                component: {
                                    name: 'Awesome-places.findPlaces',
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 15,
                                    text: "Find Place",
                                    icon: img[0]
                                },
                                topBar: {
                                    title: {
                                        text: 'View Awesome Places'
                                    }
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'Awesome-places.viewPlaces',
                                    options: {
                                        
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 15,
                                    text: 'Places',
                                    icon: img[1]
                                },
                                topBar: {
                                    title: {
                                        text: 'Share your Awesome Visited Places'
                                    }
                                }
                            }
                        }  
                    }]   
                }
            }
        })
    })
    
}

export default MainTabs
