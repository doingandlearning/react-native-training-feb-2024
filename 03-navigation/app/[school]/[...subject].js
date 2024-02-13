import {
  usePathname,
  useSegments,
  useLocalSearchParams,
  Link,
} from "expo-router";
import { View, Text } from "react-native";
export default function Subject() {
  const params = useLocalSearchParams();
  console.log(params);
  return (
    <View>
      <Text>
        {params.school} - {params.subject}
      </Text>
      <Link href="/">Home</Link>
    </View>
  );
}
