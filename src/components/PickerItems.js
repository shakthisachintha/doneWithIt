import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'

const PickerItems = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <AppText style={styles.item}>{label}</AppText>
        </TouchableOpacity>
    )
}

export default PickerItems

const styles = StyleSheet.create({
    item: {
        padding: 10,
        backgroundColor: colors.gray,
        margin: 5
    }
})
