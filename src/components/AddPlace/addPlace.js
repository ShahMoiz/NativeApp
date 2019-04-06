import  React, {Component}  from "react";
import {View, StyleSheet, TextInput, Button} from 'react-native';



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
        <Button 
          title="Add"
          style={styles.inputContainerButton}
          onPress={() => {
            this.props.submithandler(this.state.placeText)
            this.setState({placeText: ''});
          }}
          />
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
      width: '30%'
    },
    
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10
    },
  })

  export default AddPlaceComponent