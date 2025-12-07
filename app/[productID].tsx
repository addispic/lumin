import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useLocalSearchParams } from "expo-router";

export default function UserDetail() {
  const insets = useSafeAreaInsets();
  const { productID } = useLocalSearchParams();

  //   console.log(params);
  return (
    <View style={{ padding: insets.top }}>
      <Text>Product: {productID}</Text>
    </View>
  );
}
