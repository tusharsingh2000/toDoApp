import React from 'react';
import { Text, StyleSheet, View } from "react-native";

export function Heading() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Today's Tasks</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ededd0",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        backgroundColor: "#907fa4",
    }
})