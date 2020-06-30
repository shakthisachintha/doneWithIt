import React, { useState } from 'react'
import { StyleSheet, ScrollView, Text, View, FlatList, SafeAreaView } from 'react-native'
import UserCard from '../components/UserCard'

import ListItemSeparator from '../components/ListItemSeparator'
import SlideDeleteAction from '../components/SlideDeleteAction'

const initialMessages = [
    {
        id: 1,
        title: 'Message Title One',
        description: 'Message Description One',
        image: 'https://picsum.photos/200'
    },
    {
        id: 2,
        title: 'Message Title Two',
        description: 'Message Description Two',
        image: 'https://picsum.photos/200'
    },
    {
        id: 3,
        title: 'Message Title Three',
        description: 'Message Description Three',
        image: 'https://picsum.photos/200'
    },
    {
        id: 4,
        title: 'Message Title Four',
        description: 'Message Description Four',
        image: 'https://picsum.photos/200'
    },
]

const MessageScreen = () => {

    const [messages, setMessages] = useState(initialMessages);
    const [resfreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }

    return (
        <SafeAreaView>
            <FlatList data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => <UserCard
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => { alert(item.description) }}
                    renderRightActions={() => <SlideDeleteAction onPress={() => handleDelete(item)} />}
                />}
                ItemSeparatorComponent={() => { return <ListItemSeparator /> }}
                refreshing={resfreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: 'Message Title Three',
                            description: 'Message Description Three',
                            image: 'https://picsum.photos/200'
                        },
                    ])
                }}
            />
        </SafeAreaView>


    )
}

export default MessageScreen

const styles = StyleSheet.create({})
