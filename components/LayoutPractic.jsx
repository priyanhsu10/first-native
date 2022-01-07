import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function LayoutPractic() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        backgroundColor: "black",
        width: "100%",
        height: 300,
        justifyContent: "space-evenly",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 1,

          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
