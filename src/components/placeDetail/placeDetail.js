import React from 'react';

import {View, Modal, Text, Image, Button, StyleSheet} from 'react-native';

const PlaceDetailModal = props => {
    let selectedContent = null;

    if(props.selectedItem){
        selectedContent = 
        <View>
            <Image source={props.selectedItem.img} style={styles.selectedContentImg} />
            <Text style={styles.selectedContentText}>{props.selectedItem.name}</Text>
        </View>
    }

    return (
    
    <Modal 
        visible={props.selectedItem !== null}
        animationType="slide"
    >
        <View>
            <View>
                {selectedContent}
            </View>
            <View>
                <Button title="Delete" color='red' onPress={props.deleteModal}/>
                <Button title="Close" onPress={props.closeModal} />
            </View>
        </View>
    </Modal>
    )

}

const styles = StyleSheet.create({
    selectedContentImg: {
        width: '100%',
        height: 400
    },
    selectedContentText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default PlaceDetailModal;