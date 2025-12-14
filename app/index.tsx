import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ padding: insets.top }}>
      <Text>Home Page</Text>
    </View>
  );
}
