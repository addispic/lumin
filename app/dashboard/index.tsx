import { router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// contexts
import { useAuthContext } from "@/contexts/AuthContext";
import { useProductsContext } from "@/contexts/ProductsContext";

// components
import Header from "@/components/Header";
import NewProduct from "@/components/NewProduct";
export default function Home() {
  // contexts
  // auth
  const { user } = useAuthContext();
  // products
  const { isFormOn } = useProductsContext();
  // hooks
  const insets = useSafeAreaInsets();

  //   effects
  useEffect(() => {
    if (!user) {
      router.replace("/(auth)/login");
    }
  }, [user]);
  return (
    <View
      className="flex-1 bg-white flex flex-col px-3 relative"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {/* header */}
      <Header />
      {/* new product form */}
      {isFormOn && <NewProduct />}
    </View>
  );
}
