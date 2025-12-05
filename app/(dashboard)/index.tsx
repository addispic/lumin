import { Redirect } from "expo-router";
import { Pressable, Text, View } from "react-native";

// contexts
import { useAuthContext } from "@/contexts/AuthContext";

export default function Home() {
  // contexts
  const { setUser, user } = useAuthContext();
  if (!user) {
    return <Redirect href={"/login"} />;
  }
  return (
    <View className="flex-1 bg-red-50 flex items-center justify-center">
      <Text>Home</Text>
      <Pressable
        className="w-max px-12 py-1.5 rounded-full bg-neutral-300 text-neutral-500 text-sm my-4"
        onPress={() => {
          setUser(null);
        }}
      >
        <Text className="text-sm">Logout</Text>
      </Pressable>
    </View>
  );
}
