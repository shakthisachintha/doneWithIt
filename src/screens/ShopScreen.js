import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Card from '../components/Card';

import colors from '../config/colors';
import routes from '../navigation/routes';

let items = [
    {
        id: 1,
        title: "Black Jacket For Sale",
        price: 100,
        image: 'https://static.remove.bg/remove-bg-web/9a1822008d8fc71038b8b32b3d470cfd086ed3c6/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg'
    },
    {
        id: 2,
        title: "Android Phone For Sale",
        price: 250,
        image: 'https://cdn1.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2020/03/best_android_phone_uk_2020_smartphones.jpg?itok=jEhmCFfK'
    },
    {
        id: 3,
        title: "HeadPhone For Sale",
        price: 29,
        image: 'https://previews.123rf.com/images/deagreez/deagreez1711/deagreez171100600/90377112-close-up-portrait-of-brunette-charming-smiling-kid-holding-headphones-on-her-head-enjoying-her-favor.jpg'
    },
]

const ShopScreen = ({ navigation }) => {
    return (

        <FlatList showsVerticalScrollIndicator={false} style={styles.container}
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <Card
                    onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    title={item.title}
                    subTitle={"$" + item.price}
                    image={item.image}
                />
            )}
        />


    )
}

export default ShopScreen

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 40,
        backgroundColor: colors.gray,
        flex: 1,
        width: '100%'
    }
})
