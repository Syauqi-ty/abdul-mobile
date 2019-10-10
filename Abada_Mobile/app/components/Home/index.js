import React, {Component} from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import Login from './Login'




class Home extends Component {
      render() {
         return (
            <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Image
                style={styles.logo} 
                source={require('../../images/ABDUL.png')}/>
            <View style={styles.formcontainer}>
                <Login/>

            </View>
            </View>  
           </View>
          )
     }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#EFDF77'
    },
    logocontainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: 100,
    },
    logo: {
        width: 180,
        height: 150,
        right: 20
    },
   
});

export default Home