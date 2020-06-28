import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';

const WelcomScreen = () => {
    return (
        <ImageBackground blurRadius={2} style={styles.background} source={require('../assets/images/image.jpg')}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                <Text style={styles.logoText}>Sell what we don't need</Text>
            </View>

            <View style={styles.btnContainer}>
                <AppButton title="Login"></AppButton>
                <AppButton title="Register" color="secondary"></AppButton>
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
    btnContainer: {
        padding: 20,
        width: '100%'
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: colors.primary
    },
    logoText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: "capitalize"
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
        backgroundColor: colors.secondary
    },
    logo: {
        width: 150,
        height: 150
    }
})


export default WelcomScreen
