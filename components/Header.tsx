import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

// contexts
// auth
import { useAuthContext } from "@/contexts/AuthContext";
// products
import { useProductsContext } from "@/contexts/ProductsContext";

export default function Header() {
  // contexts
  // auth
  const { user, setUser } = useAuthContext();
  // products
  const { setIsFormOn } = useProductsContext();
  // handlers
  const logout = () => {
    setUser(null);
  };
  return (
    <View className="flex flex-row items-center justify-between w-full rounded-xl px-3 py-3 bg-neutral-50">
      <View>
        <Text className="text-green-600 font-bold text-sm uppercase">
          Lumin
        </Text>
      </View>
      <View className="flex flex-row items-center justify-end gap-x-3">
        <Pressable
          onPress={() => {
            setIsFormOn(true);
          }}
        >
          <Ionicons name="add-circle-outline" size={24} color={"#16a34a"} />
        </Pressable>
        <View className="flex flex-row items-center justify-end gap-x-1.5">
          <Text className="text-sm text-neutral-400">{user?.username}</Text>
          <Ionicons name="person-outline" color={"#a3a3a3"} size={20} />
        </View>
        <Pressable onPress={logout}>
          <Ionicons name="log-out-outline" color={"#a3a3a3"} size={24} />
        </Pressable>
      </View>
    </View>
  );
}
