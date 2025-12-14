import { AntDesign, Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NewProduct() {
  // states
  const [categories, setCategories] = useState({
    isOn: false,
    selected: "",
    options: [
      {
        text: "Phone",
        value: "Phone",
      },
      {
        text: "Computer",
        value: "Computer",
      },
    ],
  });
  // hooks
  const insets = useSafeAreaInsets();
  return (
    <View style={{ padding: insets.top }} className="flex-1 bg-white">
      {/* header */}
      <View className="flex flex-row items-center justify-between">
        <Link href={"/products"}>
          <View className=" flex flex-row items-center gap-x-1.5">
            <AntDesign name="arrow-left" size={12} color={"#b8b8b8"} />
            <Text className="text-sm text-neutral-400">Back</Text>
          </View>
        </Link>
        <Text className="text-sm font-medium uppercase text-neutral-400">
          Add New Product
        </Text>
        <View className="w-7 aspect-square rounded-md shrink-0 flex items-center justify-center bg-neutral-200 overflow-hidden">
          <AntDesign name="question" size={12} />
        </View>
      </View>
      {/* form */}
      <View className="mt-3">
        {/* category */}
        <View className="flex flex-row items-center gap-3">
          {/* label*/}
          <View className="w-max">
            <Text className="text-sm text-neutral-500 shrink-0">Category</Text>
          </View>
          {/* options */}
          <View className="flex-1 relative">
            {/* header */}
            <Pressable
              onPress={() => {
                setCategories((prev) => {
                  return {
                    ...prev,
                    isOn: !prev.isOn,
                  };
                });
              }}
              className="px-1.5 py-1.5 border border-neutral-300 rounded-md flex flex-row items-center justify-between"
            >
              <Text className="text-sm">{categories.selected || "Select"}</Text>
              <Entypo
                name="chevron-thin-down"
                size={12}
                color={"#b8b8b8"}
                className={`transition-transform ease-in-out duration-300 ${categories.isOn ? "-rotate-180" : "rotate-0"}`}
              />
            </Pressable>
            {/* options */}
            <View
              className={`absolute left-0 top-[110%] w-full transition-all ease-in-out duration-300 overflow-hidden ${categories.isOn ? "h-72" : "h-0"}`}
            >
              <View className="border border-neutral-300 rounded-md bg-white shadow-md border-b-transparent overflow-hidden">
                {categories.options.map((optionItem) => {
                  return (
                    <Pressable
                      key={optionItem.value}
                      className="px-1.5 py-1.5 border-b border-neutral-300"
                      onPress={() => {
                        setCategories((prev) => {
                          return {
                            ...prev,
                            isOn: false,
                            selected: optionItem.value,
                          };
                        });
                      }}
                    >
                      <Text className="text-sm text-neutral-500">
                        {optionItem.text}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
