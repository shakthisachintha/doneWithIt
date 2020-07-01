import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import UserCard from '../components/UserCard'
import colors from '../config/colors'
import AppIcon from '../components/AppIcon'

const UserAccountScreen = ({ name, email, image, navigation }) => {
    return (
        <View>
            <View style={styles.container}>
                <UserCard
                    title={name}
                    subTitle={email}
                    image={image}></UserCard>
            </View>

            <View style={styles.container}>
                <UserCard title="My Listings" IconComponent={<AppIcon name="format-list-bulleted-type" backgroundColor={colors.secondary} />} />
                <UserCard onPress={() => navigation.navigate('Messages')} title="My Messages" IconComponent={<AppIcon name="forum-outline" backgroundColor={colors.primary} />} />
                <UserCard style={{ marginVertical: 25 }} title="Logout" IconComponent={<AppIcon name="logout" backgroundColor={'#F5F529'} />} />
            </View>
        </View>
    )
}

export default UserAccountScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: 30
    }
})
