import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';




class Login extends Component {
    constructor (props){
        super(props);
    }
    render() {
         return (
           <View style={styles.container}>
              <TextInput
               placeholder='username or email'
               style={styles.input}
               />
               <TextInput
               placeholder='password'
               secureTextEntry               
               style={styles.pass}
               />
               <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>LOGIN</Text>
               </TouchableOpacity>

               <TouchableOpacity
                style={styles.sign}
                onPress ={()=>navigate('register')}>
               <Text style={styles.reg}>Sign Up</Text>
               </TouchableOpacity>
               <Text style={styles.how}>Didn't have account?</Text>
           </View>
          )
     }
}

const styles = StyleSheet.create({
    container: {

    },
    input: {
        height: 40,
        width: 250,
        backgroundColor: '#E6CE2A',
        marginTop: 40,
        paddingHorizontal: 10
       
    },
    pass:{
        height: 40,
        width: 250,
        backgroundColor: '#E6CE2A',
        marginTop: 10,
        paddingHorizontal: 10
        },
    button: {
        backgroundColor:'#E09B5F',
        paddingVertical:10,
        marginTop: 10,
        },
    text:{
        textAlign: 'center',
        fontWeight: 'bold'        
    },
    sign:{
        backgroundColor:'#E09B5F',
        paddingVertical:10,
        top: 30
        
    },
    reg:{
        textAlign: 'center',
        fontWeight: 'bold'
    },
    how:{
        textAlign:'center',
        bottom: 30,
        right: 60,
        color:'#000000',
    }


})
    
export default Login
