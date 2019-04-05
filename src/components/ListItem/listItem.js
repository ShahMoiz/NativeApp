import React from 'react';
import {View,Image, Text, StyleSheet} from 'react-native';
// import SampleImage from '../../assets/karachi.jpg'

const ListItem = (props) => (
    <View key={props.place.id} style={styles.placeNameContent}>
        <Image  source={props.place.img} style={ styles.placeImage } />
        <Text style={styles.placeText}>{props.place.name}</Text>
    </View> 
) 

const styles = StyleSheet.create({
    placeNameContent: {
        flexDirection: 'row',  
        backgroundColor: '#eee',
        width: '90%',
        margin: 5,
        padding: 5,
        marginLeft: 20,
        marginRight: 20,
      },
      placeImage: {
          width: 40,
          height: 40, 
          resizeMode: 'cover'
      },
      placeText: {
          padding: 10
      }
})

export default ListItem;