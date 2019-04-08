import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Modal, Text, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';

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
                <TouchableOpacity onPress={props.deleteModal}>
                    <View style={styles.deleteButton}>
                        <Icon name="delete-empty" size={30} color="red" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.closeModal}>
                    <View style={styles.closeButton}>
                        <Icon name="home" size={30} color="blue" />
                    </View>
                </TouchableOpacity>
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
    },
    deleteButton: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
        margin: 5
    },
    closeButton: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'blue',
        margin: 5
    }
})

export default PlaceDetailModal;