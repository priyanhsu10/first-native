import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AddTodoItem from "./AddTodoItem";
import TodoList from "./TodoList";

export default function Layout() {
  const [todolist, setTodoList] = useState([]);

  const onAdditem = (item) => {
    setTodoList((pre) => [...pre, { goal: item, key: Math.random.toString() }]);
    // setGoal("");
  };
  return (
    <View style={styles.screen}>
      <AddTodoItem onAdditem={onAdditem} />
      <TodoList todolist={todolist} />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
