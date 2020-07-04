import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NewListingButton = function ({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon name="plus-circle" color={colors.white} size={40} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 40,
        borderColor: colors.white,
        borderWidth: 15,
        bottom: 25,
        height: 80,
        justifyContent: 'center',
        width: 80,

    }
})

export default NewListingButton;

