import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import Card from '../components/Card';

import colors from '../config/colors';

const ShopScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Card title="Red Jacket For Sale" subTitle="$100" image='https://static.remove.bg/remove-bg-web/9a1822008d8fc71038b8b32b3d470cfd086ed3c6/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg'></Card>
            <Card title="Red Jacket For Sale" subTitle="$100" image='https://static.remove.bg/remove-bg-web/9a1822008d8fc71038b8b32b3d470cfd086ed3c6/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg'></Card>
            <Card title="Red Jacket For Sale" subTitle="$100" image='https://static.remove.bg/remove-bg-web/9a1822008d8fc71038b8b32b3d470cfd086ed3c6/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg'></Card>
            <Card title="Red Jacket For Sale" subTitle="$100" image='https://static.remove.bg/remove-bg-web/9a1822008d8fc71038b8b32b3d470cfd086ed3c6/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg'></Card>
            <Card title="Red Jacket For Sale" subTitle="$100" image='https://static.remove.bg/remove-bg-web/9a1822008d8fc71038b8b32b3d470cfd086ed3c6/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg'></Card>
            <Card title="Red Jacket For Sale" subTitle="$100" image='https://static.remove.bg/remove-bg-web/9a1822008d8fc71038b8b32b3d470cfd086ed3c6/assets/before-after/s2-before-9b5d9fb3bc1ef9b5b10a0bb82c2801f23ba451ab2a4d26c05da1279bda95eb49.jpg'></Card>
        </ScrollView>
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
