import { Text, View, Pressable, Button } from "react-native";
import { Link, Stack } from "expo-router";
export default function About() {
  return (
    <View>
      {/* <Stack.Screen
        options={{
          title: "About page",
          headerStyle: { backgroundColor: "#bbbbbb" },
        }}
      /> */}
      <Text>The about page!</Text>
      <Link href="/" asChild>
        <Button title="Home" />
      </Link>
    </View>
  );
}
