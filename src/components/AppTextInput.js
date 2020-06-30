import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';

const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {icon && <Icon style={styles.icon} size={25} color={defaultStyles.darkGray} name={icon} />}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 20,
        flexDirection: "row",
        width: '100%',
        padding: 5,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
})
