import { Text, View, Pressable, Button } from "react-native";
import { Link } from "expo-router";
export default function About() {
  return (
    <View>
      <Text>The about page!</Text>
      <Link href="/" asChild>
        <Button title="Home" />
      </Link>
    </View>
  );
}
