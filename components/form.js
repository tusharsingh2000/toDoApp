import React, { useState } from 'react';
import { Alert, Button, Keyboard, StyleSheet, TextInput, View } from "react-native";

export function InputForm({ addToDo }) {
    const [task, setTask] = useState("");
    return (
        <View style={styles.form}>
            <TextInput
                placeholder="Enter task....."
                onChangeText={(val) => setTask(val)}
                style={styles.input}
                value={task}
            />
            <View style={styles.button}>
                <Button
                    title="Add task"
                    color="#907fa4"
                    onPress={() => {
                        if(task.length > 3){
                        addToDo(task)
                        setTask("")
                        Keyboard.dismiss()
                        }else{
                            Alert.alert("The task should be greater than 3 characters!!")
                        }
                        }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
    },
    button: {
        marginTop: 20,
    },
    form: {
        padding: 15,
    }
})