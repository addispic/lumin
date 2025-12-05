import { Stack } from "expo-router";

// contexts
// auth
import { AuthContextProvider } from "@/contexts/AuthContext";

// global css
import "../global.css";

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthContextProvider>
  );
}
