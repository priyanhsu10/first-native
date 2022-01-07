import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function TodoList({ todolist }) {
  const deletefun = () => {
    console.log("delete presss");
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.key}
      data={todolist}
      renderItem={(x) => (
        <TouchableOpacity onPress={deletefun}>
          <View style={styles.goal}>
            <Text>{x.item.goal}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

  goal: { padding: 10, margin: 5, backgroundColor: "grey", fontWeight: "bold" },
});
