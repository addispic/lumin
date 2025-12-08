import { Link } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// contexts
import { useProductsContext } from "@/contexts/ProductsContext";

// defs
import { IProduct } from "@/definitions/products.definitions";

export default function Home() {
  // hooks
  const insets = useSafeAreaInsets();
  // contexts
  // products
  const { products } = useProductsContext();
  const RenderItem = ({ item }: { item: IProduct }) => {
    return (
      <View className="flex w-full flex-row py-2 gap-x-3 border-b border-neutral-100">
        <View className="w-12 h-16 rounded-sm overflow-hidden">
          <Image
            source={{ uri: item.uri }}
            className="w-full h-full object-center object-cover"
          />
        </View>
        <View className="flex-1">
          <Text className="text-sm font-medium text-neutral-500">
            {item.name}
          </Text>
          <View>
            <Text className="text-xs">
              <Text className="text-neutral-400">SKU: </Text>
              <Text className="font-medium text-green-600">{item.sku}</Text>
            </Text>
            <View className="flex flex-row items-center gap-x-5 justify-between">
              <Text className="text-xs text-neutral-400">
                Price:{" "}
                <Text className="font-medium text-neutral-700">
                  {item.price}
                </Text>
                <Text className="text-green-600"> Brr.</Text>
              </Text>
              <Link
                href={{
                  pathname: "/dashboard/[id]",
                  params: { id: String(item.id) },
                }}
                className="text-xs px-3 py-1 rounded-full bg-neutral-200 text-neutral-400"
              >
                View Detail
              </Link>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View
      className="flex-1 flex px-3 bg-white"
      style={{ paddingTop: insets.top }}
    >
      <View>
        <Text>Header</Text>
      </View>
      <View className="flex-1">
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RenderItem item={item} />}
        />
      </View>
    </View>
  );
}
