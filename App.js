import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { useState } from "react";

export default function App() {
  const [couter, setCouter] = useState(0);
  const increase = () => {
    setCouter((x) => x + 1);
  };
  const decriese = () => {
    setCouter((x) => x - 1);
  };
  return (
    <View style={styles.container}>
      <Text>{couter}</Text>
      <Button title="counter +" onPress={increase} />
      <Button title="counter -" onPress={decriese} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
