import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

// styles
import "../global.css";

// providers
// products
import { ProductsContextProvider } from "@/contexts/ProductsContext";

export default function RootLayout() {
  return (
    <ProductsContextProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            elevation: 0,
            borderTopWidth: 0,
            backgroundColor: "#fafafa",
          },
          tabBarActiveTintColor: "#0dbd71",
          tabBarInactiveTintColor: "#bababa",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            title: "Products",
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="new-product"
          options={{
            title: "New Product",
            href: null,
            tabBarStyle: {
              display: "none",
            },
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </ProductsContextProvider>
  );
}
