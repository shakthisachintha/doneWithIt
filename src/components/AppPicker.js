import React from 'react'
import { StyleSheet, Text, View, TextInput, AppRegistry } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';
import AppText from './AppText';

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {icon && <Icon style={styles.icon} size={25} color={defaultStyles.darkGray} name={icon} />}
            <AppText style={styles.text}>Category</AppText>
            <Icon size={25} color={defaultStyles.darkGray} name="chevron-down" />
        </View>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 20,
        flexDirection: "row",
        width: '100%',
        padding: 5,
        paddingTop: 14,
        paddingBottom: 13,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    }
})
