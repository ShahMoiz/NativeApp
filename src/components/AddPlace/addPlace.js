import  React, {Component}  from "react";
import {View, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class AddPlaceComponent extends Component {
  constructor(props){
      super(props);
      this.state = {
        placeText: ''
    }
    }
    

    render(){
    return (
    <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputContainerInput}
          placeholder="Add Place Here"
          onChangeText={text => this.setState({placeText: text})}
          value={this.state.placeText}
          />
          <TouchableOpacity onPress={() => {
            this.props.submithandler(this.state.placeText)
            this.setState({placeText: ''});
          }}>
            <View style={styles.inputContainerButton}>
              <Icon name="plus" size={30}
               color="white" />
            </View>
          </TouchableOpacity>
        {/* <Button 
          title="Add"
          style={styles.inputContainerButton}
          onPress={() => {
            this.props.submithandler(this.state.placeText)
            this.setState({placeText: ''});
          }}
          /> */}
    </View>
    )
    }
}

const styles = StyleSheet.create({
    inputContainerInput: {
      width: '70%',
      borderBottomWidth: 1
    },
    inputContainerButton: {
      // width: 50,
      backgroundColor: 'blue',
      marginTop: 20,
      height: 50

    },
    
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10
    },
  })

  export default AddPlaceComponent