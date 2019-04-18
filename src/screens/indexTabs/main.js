import React, {Component} from 'react';
// import { Promise } from 'react-native';
import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const MainTabs = () =>{
    Promise.all([
    Icon.getImageSource("map-marker", 30, 'red'),
    Icon.getImageSource("view-dashboard", 30, 'blue'),
    AntDesignIcon.getImageSource("bars", 30, 'black')
    ]).then(img => {
        Navigation.setRoot({
            root: {
              sideMenu: {
                left: {
                    visible: true,
                  component: {
                    name: 'Awesome-places.viewPlaces',
                    passProps: {
                      text: 'This is a left side menu screen'
                    },
                    id: 'sideDraw',
                    
                  }
                },
                center: {
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
                                                    text: "Find Place",
                                                    icon: img[0]
                                                },
                                                topBar: {
                                                //     title: {
                                                //         text: 'View Awesome Places'
                                                //     },
                                                //     subtitle: {
                                                //         text: 'Check out Best Places in your Town',
                                                //         color: 'gray'
                                                //     },
                                                    // leftButtons: [{
                                                    //     icon: source[0],
                                                //         id: 'sideDraw',
                                                //         icon: img[2],
                                                //         component: {
                                                //             name: 'Awesome-places.AuthScreen',
                                                //         },
                                                //         passProps: {
                                                //             myFunctions: () => Navigation.mergeOptions('sideDraw', {
                                                //                 sideMenu: {
                                                //                   left: {
                                                //                     visible: true
                                                //                   }
                                                //                 }
                                                //               })
                                                //         }
                                                        
                                                    // }]
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
                },
                right: {
                  component: {
                    name: 'Awesome-places.AuthScreen',
                    passProps: {
                      text: 'This is a right side menu screen'
                    }
                  }
                }
              }
            }
          });
        // Navigation.setRoot({
        //     root: {
                
        //         bottomTabs: {
        //             children: [{
                        
        //                 stack: {
                            
        //                     children: [{
                                
        //                         component: {
        //                             name: 'Awesome-places.findPlaces',
        //                         }
        //                     }],
        //                     options: {
        //                         bottomTab: {
        //                             text: "Find Place",
        //                             icon: img[0]
        //                         },
        //                         topBar: {
        //                             title: {
        //                                 text: 'View Awesome Places'
        //                             },
        //                             subtitle: {
        //                                 text: 'Check out Best Places in your Town',
        //                                 color: 'gray'
        //                             },
        //                             leftButtons: [{
        //                                 id: 'side Draw',
        //                                 icon: img[2],
        //                                 component: {
        //                                     name: 'Awesome-places.AuthScreen',
        //                                     passProps: {
                                                
        //                                     }
                                            
        //                                 },
                                        
        //                             }]
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 stack: {
        //                     children: [{
        //                         component: {
        //                             name: 'Awesome-places.viewPlaces',
        //                             options: {
                                        
        //                             }
        //                         }
        //                     }],
        //                     options: {
        //                         bottomTab: {
        //                             text: 15,
        //                             text: 'Places',
        //                             icon: img[1]
        //                         },
        //                         topBar: {
        //                             title: {
        //                                 text: 'Share your Awesome Visited Places'
        //                             }
        //                         }
        //                     }
        //                 }  
        //             }]   
        //         }
        //     }
        // })
    })
    
}

export default MainTabs
