
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddPlaceComponent from './src/components/AddPlace/addPlace';
import PlaceContentComponent from './src/components/placesContent/placesContent';
import SampleImage from './src/assets/karachi.jpg';
import PlaceDetailModal from './src/components/placeDetail/placeDetail';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      places: [{ name: 'Karachi', id: Math.random(), img: SampleImage }]
    }
  }


  addPlaceHandler = text => {
    if (text.trim() === '') return;

    this.setState((prevState) => ({
      places: prevState.places.concat({ name: text, id: Math.random(), img: SampleImage }),
    }))
  }

  dltSelectedItemHandler = () => {
    const updatedArray = this.state.places.filter(place => place.id !== this.state.selectedItem.id);

    this.setState({ places: updatedArray, selectedItem: null })
  }

  selectedPlaceHandler = (id) => {
    this.setState(prevState => ({
      selectedItem: this.state.places.find(place => place.id===id)
    }))
  }

  closeModalhandler= () => {
    this.setState({
      selectedItem: null
    })
  }
  render() {
    return (
      <View style={styles.container}>

        <PlaceDetailModal
          selectedItem={this.state.selectedItem}
          closeModal={this.closeModalhandler}
          deleteModal={this.dltSelectedItemHandler}
        />

        <AddPlaceComponent
          submithandler={this.addPlaceHandler}
        />

        <PlaceContentComponent
          places={this.state.places}
          selectedPlace={this.selectedPlaceHandler}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column'
  },

})