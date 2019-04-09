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
                    children: [
                        {
                            component: {
                                name: 'Awesome-places.findPlaces',
                                options: {
                                    bottomTab: {
                                        text: 15,
                                        text: "Find Place",
                                        icon: img[0]
                                    }
                                }
                            }
                        },
                        {
                            component: {
                                name: 'Awesome-places.viewPlaces',
                                options: {
                                    bottomTab: {
                                        text: 15,
                                        text: 'Places',
                                        icon: img[1]
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        })
    })
    
}

export default MainTabs

// import React, {Component} from 'react';
// // import { Promise } from 'react-native';
// import { Navigation } from "react-native-navigation";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// const MainTabs = () =>
//         Navigation.setRoot({
//             root: {
//                 bottomTabs: {
//                     children: [
//                         {
//                             component: {
//                                 name: 'Awesome-places.findPlaces',
//                                 options: {
//                                     bottomTab: {
//                                         text: 15,
//                                         text: "Find Place",
//                                         icon: require('../authScreen/signIn.png')
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             component: {
//                                 name: 'Awesome-places.viewPlaces',
//                                 options: {
//                                     bottomTab: {
//                                         text: 15,
//                                         text: 'Places',
//                                         icon: require('../authScreen/signUp.png')
//                                     }
//                                 }
//                             }
//                         }
//                     ]
//                 }
//             }
//         })

// export default MainTabs