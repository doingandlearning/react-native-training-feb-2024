import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WeatherProvider } from "./context/WeatherContext";
import Weather from "./components/Weather";

export default function App() {
  return (
    <WeatherProvider>
      <View style={styles.container}>
        <Weather />
        <StatusBar style="auto" />
      </View>
    </WeatherProvider>
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
