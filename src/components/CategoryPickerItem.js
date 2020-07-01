import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import AppIcon from './AppIcon';
import AppText from './AppText';

// Picker Item
const CategoryPickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={styles.container}>
            <AppIcon
                backgroundColor={item.backgroundColor}
                name={item.icon}
                size={80}
            />
            <AppText style={styles.label}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center"
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})
