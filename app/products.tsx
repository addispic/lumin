import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// contexts
// products
import { useProductsContext } from "@/contexts/ProductsContext";

export default function Products() {
  // contexts
  // products
  const { products } = useProductsContext();
  // hooks
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 bg-white px-3">
      <View className="flex flex-row items-center justify-between">
        <Text>Header Section</Text>
        <Link href={"/new-product"}>Add New Product</Link>
      </View>
      <View className="flex-1">
        {products.length > 0 ? (
          <View>
            <Text>Products</Text>
          </View>
        ) : (
          <View className="flex-1 flex items-center justify-center">
            <View className="flex items-center justify-center gap-y-5">
              <View>
                <AntDesign name="frown" size={64} color={"#e3e3e3"} />
              </View>
              <Text className="text-center text-neutral-400 text-sm">
                <Text className="font-medium">Oops!</Text> no available products
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
