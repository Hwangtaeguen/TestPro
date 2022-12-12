import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,Button
} from 'react-native';
import TodoInsert from './Components/Screens/TodoInsert';
import TodoList from './Components/Screens/TodoList';
import { useState } from 'react';
import { 
  addDoc, 
  collection, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc,  
  where,
  query,onSnapshot,setDoc
 } from "firebase/firestore"; 
 import { db } from './firebase';




export default function App() {

  const [todos, setTodos] = useState([]);
  const [textvv, settextvv] = useState('');


  const addTodo = text => {
      setTodos([
        ...todos,
        {id: Math.random().toString(), textValue: text, checked: false},
      ]);
    };

    const onRemove = id => e =>{
      setTodos(todos.filter(todo=>todo.id !== id));
    }

    const onToggle = id => e => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    };


console.log(todos);


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>오늘의 할 일</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  },
  appTitle: {
    color: '#fff',
    fontSize: 37,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#2E2E2E',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10, 
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});
