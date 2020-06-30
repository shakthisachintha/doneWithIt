import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors'


const SlideDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>

            <View style={styles.container}>
                <Icon name="delete-empty" size={35} color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SlideDeleteAction

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: 70,
        justifyContent: "center",
        alignItems: 'center'
    }
})
