import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import Pressables from "./components/Pressables";
import Review from "./components/Review";
import React from "react";
import User from "./components/User";
import Movies from "./components/Movies";
import { MovieContext, MovieProvider } from "./context/MovieContext";

export default function App() {
  const [on, setOn] = React.useState(true);
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
    <MovieProvider>
      <View style={styles.container}>
        {/* <Text style={styles.textContent}>Welcome to MMU! {hello}
    <Text style={styles.nestedContent}>{"\n"}Other text</Text>
    </Text>
    <Pressables />
    {delegates.map(delegate => <Text key={delegate.name}>{delegate.name}</Text>)}
    <FlatList data={delegates} renderItem={renderItem}/> 
    
  <StatusBar style="auto" /> */}
        {/* <Button title="Hide review" onPress={() => setOn(!on)} />
      {on && (
        <Review title="WorldShip Humility" author={"RR Haywood"} rating="4.5">
        <Text>
        The world has been destroyed. The remnant of humantiy on 50
        spaceships trying to find a new home.
        </Text>
        </Review>
      )} */}
        {/* <User /> */}
        <Movies />
      </View>
    </MovieProvider>
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
