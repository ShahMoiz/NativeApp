/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

import AddPlaceComponent from './src/components/AddPlace/addPlace';
import PlaceList from './src/components/PlaceList/placeList';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPlaceText: '',
      places: ['Hello', 'World']
    }
    // this.addPlaceHandler = this.addPlaceHandler.bind(this)
  }
  changeInputText = (text) => {
    this.setState({ addPlaceText: text })
  }
  addPlaceHandler = () => {
    // alert(this.state.addPlaceText)
    if (this.state.addPlaceText.trim() === '') { return; }
    this.setState((prevState) => ({
      places: prevState.places.concat(prevState.addPlaceText),
    }))
  }
  deletePlace = (index) => {
    const updatedArray = this.state.places.filter((place, i) => i !== index)
    this.setState({ places: updatedArray })
  }
  render() {
    const placesName = this.state.places.map((place, i) => (
      <TouchableOpacity key={i} onPress={() => this.deletePlace(i)}>
        <PlaceList placeName={place} />
      </TouchableOpacity>
    ))
    return (
      <View style={styles.container}>
        <AddPlaceComponent 
          submithandler={this.addPlaceHandler} 
          changeText={this.changeInputText} 
        />

        <ScrollView >
          {
            placesName
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center'
    // borderWidth: 1
  }, 
  
})