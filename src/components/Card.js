import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native'
import colors from '../config/colors';
import AppText from './AppText';

const Card = ({ title, subTitle, image, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.cardBody}>
                <Image resizeMode="cover" source={{ uri: image }} style={styles.cardImage} />
                <View style={styles.cardFooter}>
                    <AppText style={styles.cardTitle}>{title}</AppText>
                    <AppText style={styles.cardSubTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Card

const styles = StyleSheet.create({
    cardBody: {
        borderRadius: 10,
        marginVertical: 15,
        backgroundColor: colors.white,
        overflow: "hidden"
    },
    cardFooter: {
        justifyContent: "center",
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 15
    },
    cardImage: {
        width: '100%',
        height: 190,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.black
    },
    cardSubTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 3,
        color: colors.secondary
    }
})
