import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

// styles
import "../../global.css";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#c2c2c2",
        tabBarActiveTintColor: "#1f75ff",
        tabBarStyle: {
          backgroundColor: "#f2f2f2",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "100",
        },
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
          tabBarStyle: {
            backgroundColor: "#f2f2f2",
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      />
      <Tabs.Screen name="products" options={{ title: "Products" }} />
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
        name="profiles"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
