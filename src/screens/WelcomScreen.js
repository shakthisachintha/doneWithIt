import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';


const WelcomScreen = () => {
    return (
        <ImageBackground style={styles.background} source={require('../assets/images/image.jpg')}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                <Text style={styles.logoText}>Sell what we don't need</Text>
            </View>

            <View style={styles.loginButton}>

            </View>
            <View style={styles.registerButton}>

            </View>
        </ImageBackground>
    )
}



const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'tomato'
    },
    logoText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textShadowColor: 'white'
    },
    logoContainer: {
        position: 'absolute',
        top: 10,
        flex: 1,
        alignItems: 'center'
    },
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#4ecdc4'
    },
    logo: {
        width: 150,
        height: 150
    }
})


export default WelcomScreen
