import { Tabs } from "expo-router";

import {
  Ionicons,
  Feather,
} from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#C67C4E",

        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",

          tabBarIcon: ({ color }) => (
            <Ionicons
              name="home"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",

          tabBarIcon: ({ color }) => (
            <Ionicons
              name="heart-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",

          tabBarIcon: ({ color }) => (
            <Feather
              name="shopping-bag"
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Alerts",

          tabBarIcon: ({ color }) => (
            <Ionicons
              name="notifications-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}