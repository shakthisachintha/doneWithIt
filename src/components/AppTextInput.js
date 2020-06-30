import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';

const AppTextInput = ({ backgroundColor, icon, ...otherProps }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            {icon && <Icon style={styles.icon} size={20} color={defaultStyles.darkGray} name={icon} />}
            <TextInput style={[defaultStyles.text, { flex: 1 }]} {...otherProps} />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 2,
        marginVertical: 10
    },
    icon: {
        marginRight: 6,
        marginLeft: 10
    },
})
