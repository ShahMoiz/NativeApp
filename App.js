
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

import AddPlaceComponent from './src/components/AddPlace/addPlace';
import PlaceContentComponent from './src/components/placesContent/placesContent';
import SampleImage from './src/assets/karachi.jpg';
import PlaceDetailModal from './src/components/placeDetail/placeDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

class App extends Component {

  addPlaceHandler = text => {
    if (text.trim() === '') return;
    console.log(text)
    this.props.onAddItem(text)
  }

  dltSelectedItemHandler = () => {
    this.props.onDeleteItem()
  }

  selectedPlaceHandler = id => {
    this.props.onSelectItem(id)
  }

  closeModalhandler= () => {
    this.props.onDeselectItem()
  }
  render() {
    return (
      <View style={styles.container}>

        <PlaceDetailModal
          selectedItem={this.props.selectedItem}
          closeModal={this.closeModalhandler}
          deleteModal={this.dltSelectedItemHandler}
        />

        <AddPlaceComponent
          submithandler={this.addPlaceHandler}
        />

        <PlaceContentComponent
          places={this.props.places}
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


const mapStateToProps = state => {
  return{
    places: state.places.places,
    selectedItem: state.places.selectedItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: name => dispatch(addPlace(name)),
    onDeleteItem: () => dispatch(deletePlace()),
    onSelectItem: id => dispatch(selectPlace(id)),
    onDeselectItem: () => dispatch(deselectPlace())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)