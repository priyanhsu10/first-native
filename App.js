import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { useState } from "react";
import Layout from "./components/Layout";
import LayoutPractic from "./components/LayoutPractic";

export default function App() {
  const [couter, setCouter] = useState(0);
  const increase = () => {
    setCouter((x) => x + 1);
  };
  const decriese = () => {
    setCouter((x) => x - 1);
  };
  return (
    <View>
      <Layout />
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
