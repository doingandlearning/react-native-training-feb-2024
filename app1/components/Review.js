import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Pressable,
} from "react-native";
import Constants from "expo-constants";

export default function Review({
  author = "Unknown",
  rating = "0/5",
  title = "",
  children,
}) {
  //   const { author, rating, title, children } = props;
  //   let count = 0;
  const [count, setCount] = React.useState(0);
  let x = new Date();
  console.log(x);
  function handlePress() {
    console.log(count);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text></Text>
      <Text style={styles.title}>Book Review: "{title}"</Text>
      <Text style={styles.author}>By {author}</Text>
      <Text>Rating: {rating}</Text>
      <Text style={styles.heading}>Review:</Text>
      {children}
      <Text style={{ fontSize: 50 }}>{count}</Text>
      <Pressable
        onPress={handlePress}
        style={{
          borderRadius: 20,
          borderWidth: 2,
          padding: 10,
          margin: 8,
        }}
      >
        <Text>Click me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: Platform.OS === "android" ? "bold" : "normal",
    fontSize: 20,
  },
  author: { color: "grey", marginBottom: 10 },
  heading: { marginTop: 10 },
});
