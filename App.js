import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoItem from './TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy Snacks", key: '1' },
    { text: "Learn React Native", key: '2' },
    { text: "Learn Node JS", key: '3' },

])

const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
        return (prevTodos.filter(todo=>todo.key != key))
    })
}
const submitHandler = (text)=>{
    setTodos((prevTodos)=>{
        return [{text:text,key:Math.random().toString()},...prevTodos]
    })
}
  return (
    <View style={styles.container}>
    {/* header */}
    <Header/>
    <View style={styles.content}>
    {/* to form */}
    <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>

            <FlatList data={todos} renderItem={({ item }) => (
                <TodoItem item={item} pressHandler = {pressHandler}  />
            )} />
        </View>
    </View>

    <Text></Text>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#fff",
      flex: 1,
  },
  content: {

      padding: 40,
  },
  list: {
      marginTop: 20,

  }

})
