import React, {Component} from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'

class loading extends Component {
    UNSAFE_componentWillMount()
    {
        setTimeout(()=>{
            this.props.navigation.navigate('home');
        },2000)
    }
      render() {
         return (
            <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Image
                style={styles.logo} 
                source={require('../../images/ABDUL.png')}/>
                <Text style={styles.welcome}>ABADA MOBILE</Text>
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
    welcome:{
        top: 50,
        fontStyle: 'normal',
        fontSize:25,
        fontWeight:'bold'

    }
   
});

export default loading