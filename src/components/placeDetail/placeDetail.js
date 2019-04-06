import React from 'react';

import {View,Modal,  Text, Image,Button, Stylesheet} from 'react-native';

const PlaceDetailModal = props => {
    let selectedContent = null;

    if(props.selectedItem){
        selectedContent = 
        <View>
            <Image source={props.selectedItem.img} />
            <Text>{props.selectedItem.name}</Text>
        </View>
    }

    return (
    
    <Modal visible={props.selectedItem !== null}>
        <View>
            <View>
                {selectedContent}
            </View>
            <View>
                <Button title="Delete" color='red' />
                <Button title="Close" onPress={props.closeModal} />
            </View>
        </View>
    </Modal>
    )

}

export default PlaceDetailModal;