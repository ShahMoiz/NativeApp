import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

const PlaceList = (props) => (
    <ScrollView>
        <Text style={styles.placeNameContent}>{props.placeName}</Text>
    </ScrollView>
) 

const styles = StyleSheet.create({
    placeNameContent: {
        backgroundColor: '#eee',
        width: '100%',
        margin: 5,
        padding: 5
      }
})

export default PlaceList;