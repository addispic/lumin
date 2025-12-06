import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

// contexts
import { useProductsContext } from "@/contexts/ProductsContext";

export default function NewProduct() {
  // states
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  // contexts
  const { setIsFormOn } = useProductsContext();
  // handlers
  const quantityHandler = (text: string) => {
    // remove anything that is not a number
    const cleaned = text.replace(/[^0-9]/g, "");

    // allow empty field
    setQuantity(cleaned);
  };
  const priceHandler = (text: string) => {
    // remove anything that is not a number
    const cleaned = text.replace(/[^0-9]/g, "");

    // allow empty field
    setPrice(cleaned);
  };
  return (
    <View className="absolute inset-0 bg-black/25 flex items-center justify-center px-3">
      <View className="p-3 rounded-sm bg-white w-full">
        {/* header */}
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-sm font-medium text-neutral-500">
              Add New Product
            </Text>
          </View>
          <Pressable
            onPress={() => {
              setIsFormOn(false);
            }}
          >
            <Ionicons name="close" size={24} color={"#d4d4d4"} />
          </Pressable>
        </View>
        <View className="mt-5 flex items-center justify-center">
          <Text className="text-xs text-neutral-400 text-center">
            Please all fields !
          </Text>
        </View>
        {/* form */}
        <View className="my-5">
          {/* name */}
          <View className="border border-neutral-300 px-3 py-1 rounded-md">
            <TextInput
              placeholder="Product name"
              value={name}
              onChangeText={setName}
              className="focus:ring-0 w-full focus:outline-none bg-transparent text-sm text-neutral-700"
            />
          </View>
          {/* sku */}
          <View className="border border-neutral-300 px-3 py-1 rounded-md mt-3">
            <TextInput
              placeholder="Product SKU"
              value={sku}
              onChangeText={setSku}
              className="focus:ring-0 w-full focus:outline-none bg-transparent text-sm text-neutral-700"
            />
          </View>
          {/* quantity */}
          <View className="border border-neutral-300 px-3 py-1 rounded-md mt-3">
            <TextInput
              placeholder="Product quantity"
              value={quantity}
              onChangeText={quantityHandler}
              className="focus:ring-0 w-full focus:outline-none bg-transparent text-sm text-neutral-700"
            />
          </View>
          {/* price */}
          <View className="border border-neutral-300 px-3 py-1 rounded-md mt-3">
            <TextInput
              placeholder="Product price"
              value={price}
              onChangeText={priceHandler}
              className="focus:ring-0 w-full focus:outline-none bg-transparent text-sm text-neutral-700"
            />
          </View>
          {/* description */}
          <View className="border border-neutral-300 px-3 py-1 rounded-md mt-3">
            <TextInput
              multiline
              numberOfLines={4}
              placeholder="Product description . . ."
              value={description}
              onChangeText={setDescription}
              textAlignVertical="top"
              className="focus:ring-0 w-full focus:outline-none bg-transparent text-sm text-neutral-700"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
