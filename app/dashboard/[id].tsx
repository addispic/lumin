import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ProductDetail() {
  // hooks
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <View>
      <Text>Product: {id}</Text>
    </View>
  );
}
