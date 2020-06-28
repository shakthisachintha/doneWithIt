import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'

import colors from '../config/colors';

const ViewImage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.closeButton}></View>
            <View style={styles.deleteButton}></View>
            <Image resizeMode="contain" source={require('../assets/images/chair.jpg')} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black
    },
    closeButton: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: colors.primary
    },
    deleteButton: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: colors.secondary
    },
    image: {
        width: "100%",
        height: "100%",
    }
})

export default ViewImage
