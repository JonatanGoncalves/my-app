import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Screen/Home";
import MyComponent from "./src/Screen/MyComponent";
import { Divider, MD3Colors } from "react-native-paper";

export default function App() {
  return (
    <View style={{
      flex: 1,
      gap: 30,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Home />
      <MyComponent />
    </View>
  )
}