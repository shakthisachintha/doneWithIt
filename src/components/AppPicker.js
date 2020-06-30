import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import PickerItems from './PickerItems';

const AppPicker = ({ icon, items, onSelectItem, placeholder, selectedItem }) => {
    const [modalVisiblity, setModalVisiblity] = useState(false)
    return (
        <>
            <TouchableNativeFeedback onPress={() => { setModalVisiblity(true) }}>
                <View style={styles.container}>
                    {icon && <Icon style={styles.icon} size={25} color={defaultStyles.darkGray} name={icon} />}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <Icon size={25} color={defaultStyles.darkGray} name="chevron-down" />
                </View>
            </TouchableNativeFeedback>
            <Modal visible={modalVisiblity} animationType="fade">
                <Button title="Close" onPress={() => setModalVisiblity(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => <PickerItems
                        label={item.label}
                        onPress={() => {
                            setModalVisiblity(false);
                            onSelectItem(item);
                        }} />}
                />
            </Modal>
        </>
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
