import React, { useState } from 'react';
import { View, TextInput,Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
const AddTask = ({ onAddTask }) => {
    const [initialValue, setInitialValue] = useState('');
    const handleAddTask = () => {
        if (initialValue.trim() !== '') {
            onAddTask(String(initialValue));
            setInitialValue('');
          }
    };
    return (
        <View style={styles.addCounterForm}>
          <TextInput
            style={styles.input}
            placeholder="Enter new task"
            value={initialValue}
            onChangeText={(text) => setInitialValue(text)}
            returnKeyType="done"
          />
          <Button title="Add Task" onPress={handleAddTask} />
        </View>
      );
};
const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});
export default AddTask;