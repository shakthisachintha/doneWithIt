import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../config/colors';
import AppText from './AppText';

const Card = ({ title, subTitle, image }) => {
    return (
        <View style={styles.cardBody}>
            <Image resizeMode="cover" source={{ uri: 'https://static.remove.bg/remove-bg-web/9a1822008d8fc71038b8b32b3d470cfd086ed3c6/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg' }} style={styles.cardImage} />
            <View style={styles.cardFooter}>
                <AppText style={styles.cardTitle}>{title}</AppText>
                <AppText style={styles.cardSubTitle}>{subTitle}</AppText>
            </View>
        </View>
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
