/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      addPlaceText: '',
      places: ['Hello', 'World']
    }
    // this.addPlaceHandler = this.addPlaceHandler.bind(this)
  }

  addPlaceHandler = () =>  {
            this.setState((prevState) => ({
                places: prevState.places.concat(prevState.addPlaceText)
            }))
  }
  render() {
    const placesName = this.state.places.map((place, i) => (
      <Text key={i} style={styles.placesNameContent}>{place}</Text>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputContainerInput}
          placeholder="Add Place Here"
          value={this.state.addPlaceText} 
          onChangeText={addPlaceText => this.setState({addPlaceText})}
          />
        <Button 
          title="Add"
          style={styles.inputContainerButton}
          onPress={this.addPlaceHandler}
          />

          
        </View>
        <View>
        { 
           placesName}
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  inputContainerInput: {
    width: '70%',
    borderBottomWidth: 1
  },
  inputContainerButton: {
    width: '30%'
  },
  container:  {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center'
    // borderWidth: 1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  placesNameContent: {
    backgroundColor: '#eee',
    width: '100%',
    margin: 5,
    padding:5
  }
})