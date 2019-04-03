import  React  from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';



const AddPlaceComponent = (props) => (
    <View style={styles.inputContainer}>
    {/* <Text>Hello</Text> */}
        <TextInput 
          style={styles.inputContainerInput}
          placeholder="Add Place Here"
          onChangeText={(text) => props.changeText(text)}
          />
        <Button 
          title="Add"
          style={styles.inputContainerButton}
          onPress={() => props.submithandler()}
          />

    </View>
)

const styles = StyleSheet.create({
    inputContainerInput: {
      width: '70%',
      borderBottomWidth: 1
    },
    inputContainerButton: {
      width: '30%'
    },
    
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10
    },
  })

  export default AddPlaceComponent