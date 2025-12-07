import { Link } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// styles
import "../global.css";

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  uri: string;
}

// products
const products = [
  {
    id: 1,
    title: "Dell XPS",
    description:
      "Both Dell (especially XPS/Precision) and Lenovo (especially ThinkPad/Legion) offer excellent laptops for developers, with Lenovo often favored for its keyboard/durability (ThinkPad) and Dell praised for premium build/displays (XPS), but the best choice depends on your specific needs",
    price: 970000,
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdq5Os-QXx_H1I9Kqm3UQ_95nlRfNhKZvVw&s",
  },
  {
    id: 2,
    title: "Lenovo ThinkPad",
    description:
      "ThinkPad (especially XPS/Precision) and Lenovo (especially ThinkPad/Legion) offer excellent laptops for developers, with Lenovo often favored for its keyboard/durability (ThinkPad) and Dell praised for premium build/displays (XPS), but the best choice depends on your specific needs",
    price: 850000,
    uri: "https://cdn.mos.cms.futurecdn.net/Kz6pyUBzmWHhuCLPi4niP8.jpg",
  },
  {
    id: 3,
    title: "Dell Latitude",
    description:
      "DELL LATITUDE (especially XPS/Precision) and Lenovo (especially ThinkPad/Legion) offer excellent laptops for developers, with Lenovo often favored for its keyboard/durability (ThinkPad) and Dell praised for premium build/displays (XPS), but the best choice depends on your specific needs",
    price: 1270000,
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQYKK5A26sg3o2XWQMBuH94rSRcQ24JED3g&s",
  },
];

export default function Home() {
  // hooks
  const insets = useSafeAreaInsets();

  const RenderProduct = ({ item }: { item: IProduct }) => {
    return (
      <View className="flex gap-x-3 flex-row w-full border-b border-neutral-200 py-2 items-center">
        <View className="w-12 aspect-square rounded-full overflow-hidden">
          <Image
            source={{ uri: item.uri }}
            className="w-full h-full object-center object-cover"
          />
        </View>
        <View>
          <View>
            <Text className="font-medium text-neutral-500 text-sm">
              {item.title}
            </Text>
          </View>
          <View className="flex flex-row gap-x-3">
            <Text className="text-xs">{item.price}</Text>
            <Link
              href={`/${item.id}`}
              className="text-xs text-blue-600 underline"
            >
              View detail
            </Link>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{ padding: insets.top }}
      className="flex-1 flex flex-col gap-y-3 bg-white"
    >
      <Text className="text-sm font-medium text-neutral-400">Home Page</Text>
      <View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RenderProduct item={item} />}
        />
      </View>
    </View>
  );
}
