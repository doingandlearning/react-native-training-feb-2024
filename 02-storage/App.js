import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoApp from "./components/TodoApp";
import Storage from "./components/Storage";
export default function App() {
  const [password, setPassword] = React.useState("");

  // SET SECURE STORE
  //    SecureStore.setItemAsync("rn-password", password)
  // GET FROM SECURE STORE
  //    SecureStore.getItemAsync("rn-password")

  async function getAndSetPassword() {
    // const storedPassword = await SecureStore.getItemAsync("rn-password");
    const storedPassword = await AsyncStorage.getItem("rn-password");
    if (!storedPassword) return;
    setPassword(storedPassword);
  }

  React.useEffect(() => {
    getAndSetPassword();
  }, []);

  async function handleTextChange(text) {
    setPassword(text);
    await AsyncStorage.setItem("rn-password", text);
    // await SecureStorage.setItemAsync("rn-password", text);
  }
  return (
    <View style={styles.container}>
      <Storage />
      <TodoApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 150,
  },
});
