import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Gyro from "./components/Gyro";
import Form from "./components/Form";
import FormikForm from "./components/FormikForm";
export default function App() {
  return (
    <View style={styles.container}>
      <Form />
      <StatusBar style="auto" />
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
