import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Pressables from "./components/Pressables";
import Review from "./components/Review";
export default function App() {
  const hello = "Hello";
  console.log("Hello");

  const delegates = [
    { name: "Matt", location: "MMU" },
    { name: "Andrew", location: "MMU" },
    { name: "Ajmal", location: "MMU" },
    { name: "Iain", location: "MMU" },
    { name: "Linda", location: "MMU" },
  ];

  function renderItem({ item }) {
    return (
      <View>
        <Text style={{ fontSize: 26 }}>{item.name}</Text>
        <Text style={{ fontWeight: 700 }}>{item.location}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.textContent}>Welcome to MMU! {hello}
    <Text style={styles.nestedContent}>{"\n"}Other text</Text>
    </Text>
    <Pressables />
    {delegates.map(delegate => <Text key={delegate.name}>{delegate.name}</Text>)}
     <FlatList data={delegates} renderItem={renderItem}/> 
      
      <StatusBar style="auto" /> */}
      <Review />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // fontWeight: "bold"
  },
  textContent: {
    fontWeight: "bold",
    fontSize: 24,
  },
  nestedContent: {
    color: "red",
  },
  touchable: {
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    margin: 8,
  },
});
