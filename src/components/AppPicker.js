import React, { useState } from 'react'
import { StyleSheet, View, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItems from './PickerItems';

const AppPicker = ({ icon, items, numberOfColumns = 1, onSelectItem, placeholder, selectedItem, PickerItemComponent = PickerItems }) => {
    const [modalVisiblity, setModalVisiblity] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => { setModalVisiblity(true) }}>
                <View style={styles.container}>
                    {icon && <Icon style={styles.icon} size={20} color={defaultStyles.darkGray} name={icon} />}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <Icon size={25} color={defaultStyles.darkGray} name="chevron-down" />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisiblity} animationType="fade">
                <Button title="Close" onPress={() => setModalVisiblity(false)} />
                <FlatList
                    numColumns={numberOfColumns}
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => <PickerItemComponent
                        item={item}
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
        marginRight: 10,
        marginLeft: 4
    },
    text: {
        flex: 1
    }
})
