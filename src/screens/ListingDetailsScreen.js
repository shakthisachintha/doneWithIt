import React from 'react'
import { StyleSheet, Text, ScrollView, Image, View } from 'react-native'
import colors from '../config/colors'
import AppText from '../components/AppText'
import UserCard from '../components/UserCard'

const ListingDetailsScreen = ({ route }) => {
    let { image, title, price } = route.params;
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.detailesContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.price}>${price}</AppText>
            </View>
            <View style={styles.userCard}>

                <UserCard style={{ backgroundColor: colors.gray }}
                    image='https://scontent.fcmb3-1.fna.fbcdn.net/v/t1.0-9/48955960_2246734022037625_7767313978174210048_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_oc=AQnAn-kVxXALYt9aM8j8KzB_RRKxTPMJ9PKexgI2RSWMi0V7eIeXo8qgASc4Rtc9HaI&_nc_ht=scontent.fcmb3-1.fna&oh=99d73eac27eb9968e0a688d48ef526a1&oe=5F1F1D9B'
                    title='Shakthi Sachintha'
                    subTitle="4.3 Rating"

                />
            </View>
        </ScrollView>
    )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    detailesContainer: {
        flex: 1,
        padding: 10
    },
    image: {
        width: "100%",
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        color: colors.black
    },
    price: {
        marginTop: 5,
        color: colors.secondary,
        fontSize: 20,
        fontWeight: "bold"
    },
    userCard: {
        marginVertical: 10
    }
})
