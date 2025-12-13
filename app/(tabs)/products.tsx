import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Products() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ padding: insets.top }}
      className="flex-1 flex items-center justify-center"
    >
      <View>
        <View>
          <Text className="font-medium uppercase text-neutral-600">
            Products
          </Text>
        </View>
        <View>
          <Text className="text-sm text-neutral-500">
            You can{" "}
            <Link href={"/new-product"} className="font-medium text-sky-500">
              Add
            </Link>{" "}
            new products
          </Text>
        </View>
      </View>
    </View>
  );
}
