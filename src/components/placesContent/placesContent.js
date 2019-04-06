import React from 'react';
import {FlatList, TouchableOpacity } from 'react-native';

import ListItem from '../ListItem/listItem';

const PlaceContentComponent = props => {
  _keyExtractor = (item, index) => index.toString();
  return (
    <FlatList
      data={props.places}
      keyExtractor={this._keyExtractor}
      renderItem={({ item }) =>
        <TouchableOpacity onPress={() => props.selectedPlace(item.id)}>
          <ListItem place={item} />
        </TouchableOpacity>
      }
    />
  )
};

export default PlaceContentComponent;