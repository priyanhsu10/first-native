import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function AddTodoItem({ onAdditem: onAdditem }) {
  const onTextchange = (value) => {
    setGoal(value);
  };
  const [goal, setGoal] = useState("");
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Course Goal"
        onChangeText={onTextchange}
        value={goal}
      />
      <Button title="Add" onPress={() => onAdditem(goal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    width: "80%",
    borderWidth: 1,
    padding: 10,
  },
});
