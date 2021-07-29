import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export function ListToDo({ item, removeToDo }) {
    return (
        <TouchableOpacity onPress={() => removeToDo(item.key)}>
            <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
                <MaterialIcons style={styles.icon} name="done" size={24} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 15,
        borderColor: "#bbb",
        borderWidth: 1,
        backgroundColor: "#a58faa",
        borderRadius: 10,
        flexDirection: "row"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ededd0",
    },
    icon: {
        marginLeft: "auto",
        color: "#ededd0",
        fontWeight: "bold",
        color: "#ededd0",
    }
})