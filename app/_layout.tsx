import { Stack } from "expo-router";

// contexts
// auth
import { AuthContextProvider } from "@/contexts/AuthContext";
// products
import { ProductsContextProvider } from "@/contexts/ProductsContext";

// global css
import "../global.css";

export default function RootLayout() {
  // contexts
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}
