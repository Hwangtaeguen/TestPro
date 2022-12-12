// components/TodoInsert.js
import React , {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';



const TodoInsert = ({onAddTodo}) => {

    const [newTodoItem, setNewTodoItem] = useState('');

    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
      };

      const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
      };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="일정을 입력하시오 !"
        placeholderTextColor={'#999'}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'저장'} onPress={addTodoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;