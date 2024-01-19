import React, { useState } from 'react';
import { View, TextInput,Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';
const ToDoList = ({ initialValues: toDos }) => {
    const [tasks, setTasks] = 
    useState(toDos.map((value) => ({ id: uuidv4(), title: value })));

    const addToDo = (newTitle) => { //finished
        const newTask = { id: uuidv4(), title: newTitle };
        setTasks((prevTask) => [...prevTask, newTask]);
    };
    
    const removeToDo = (id) => { //finished
        setTasks(tasks.filter((task) => task.id != id));
    };

    return (
      <View style={styles.container}>
        {tasks.map((task) => (
          <View key={task.id}>
            <Text style={styles.text}>{task.title}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Remove" onPress={() => removeToDo(task.id)} />
              
            </View>
          </View>
        ))}
        <AddTask onAddTask={addToDo} />
      </View>
    );
};
  
  const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});
export default ToDoList;