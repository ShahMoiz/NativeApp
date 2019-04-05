import React from 'react';
import {ScrollView,FlatList, TouchableOpacity} from 'react-native';

import ListItem from '../ListItem/listItem';

const PlaceContentComponent = props => {
        // <TouchableOpacity key={place.id} onPress={() => props.deletePlace(place.id)}>
        //   <ListItem placeName={place.name} />
        // </TouchableOpacity>

      return (
        <FlatList 
          data={props.places}
          renderItem={({item}) => 
            <TouchableOpacity key={item.key} onPress={() => props.deletePlace(item.id)}>
            <ListItem place={item} />
            </TouchableOpacity>
          }
        />
      )
};

export default PlaceContentComponent;