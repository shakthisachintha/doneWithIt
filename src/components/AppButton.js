import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors';

const AppButton = ({ title, onPress, color = "primary" }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        padding: 12,
        marginVertical: 10
    },
    btnText: {
        color: colors.white,
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 18
    }
})
