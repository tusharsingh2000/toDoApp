// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View, FlatList } from 'react-native';
import { InputForm } from './components/form';
import { Heading } from './components/header';
import { ListToDo } from './components/list';

export default function App() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (val) => {
    setToDos([...toDos, {name: val, key: Math.random().toString()}])
  }

  const removeToDo = (id) => {
    setToDos((prevTodos) => {
      return prevTodos.filter(items => items.key !==id )
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <View>
          <Heading />
        </View>
        {/* content */}
        <View style={styles.content}>
        <View style={styles.form}>
          <InputForm addToDo={addToDo} />
        </View>
          <View style={styles.list}>
            <FlatList
              data={toDos}
              renderItem={({ item }) => (
                <ListToDo item={item} removeToDo={removeToDo} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 37,
    backgroundColor: '#ededd0',
  },
  content: {
    padding: 20,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  form: {
    marginTop: 20
  },
});
