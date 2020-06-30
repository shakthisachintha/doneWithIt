import React from 'react'
import { StyleSheet, TouchableHighlight, Text, View, Image } from 'react-native'
import AppText from './AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors'


const UserCard = ({ IconComponent, title, image, subTitle, style, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.gray}>
                <View style={[styles.container, style]}>
                    {IconComponent}
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        backgroundColor: colors.white

    },
    detailsContainer: {
        justifyContent: "center",
        marginLeft: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    title: {
        color: colors.black,
        fontSize: 17
    },
    subTitle: {
        color: colors.darkGray,
        fontSize: 15
    }
})
