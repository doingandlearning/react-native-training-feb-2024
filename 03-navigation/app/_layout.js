import { Slot, Stack } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawLabel: "Home screen",
        }}
      />
    </Drawer>
  );
}

// export default function TabLayout() {
//   return (
//     <Tabs>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color }) => (
//             <FontAwesome
//               size={28}
//               style={{ marginBottom: -3 }}
//               color={color}
//               name="home"
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="about"
//         options={{
//           title: "About",
//           tabBarIcon: ({ color }) => (
//             <FontAwesome
//               size={28}
//               style={{ marginBottom: -3 }}
//               color={color}
//               name="pencil"
//             />
//           ),
//         }}
//       />
//       {/* To hide a route */}
//       <Tabs.Screen
//         name="department/index"
//         options={{
//           href: null,
//         }}
//       />
//     </Tabs>
//   );
// }

// export default function StackLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerStyle: { backgroundColor: "#bbb" },
//       }}
//     />
//   );
// }
// export default function RootLayout() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text>My Cool Header</Text>
//       </View>
//       <Slot style={styles.content}></Slot>
//       <View style={styles.footer}>
//         <Text>My cool footer</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flex: 1,
//   },
//   content: {
//     flex: 8,
//   },
//   footer: {
//     flex: 1,
//   },
// });
