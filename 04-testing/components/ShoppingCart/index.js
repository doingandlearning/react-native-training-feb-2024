import React from "react";
import { View, Text, FlatList } from "react-native";
import { calculateTotal } from "../../utils/calculateTotal";

export default function ShoppingCart({ items }) {
  const total = calculateTotal(items);

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
      <Text>{`Total: $${total}`}</Text>
    </View>
  );
}
