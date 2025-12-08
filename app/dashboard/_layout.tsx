import { router, Stack } from "expo-router";
import { useEffect } from "react";

// contexts
import { useAuthContext } from "@/contexts/AuthContext";

export default function DashboardLayout() {
  // contexts
  const { user } = useAuthContext();
  // effects
  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);
  return <Stack screenOptions={{ headerShown: false }} />;
}
