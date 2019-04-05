import React from 'react';

import {View,Modal,  Text, Image,Button, Stylesheet} from 'react-native';

const PlaceDetailModal = props => {
        return (<Modal>
            <View>
                <Image source={props.places.img} />
                <Text>{props.places.name}</Text>
                <Button title="Delete" color='red' />
                <Button title="Close" />
            </View>
        </Modal>
        )

}

export default PlaceDetailModal;