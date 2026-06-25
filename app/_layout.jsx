import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
      />

      <Stack.Screen
        name="(tabs)"
      />

      <Stack.Screen
        name="detail"
      />

      <Stack.Screen
        name="order"
      />

      <Stack.Screen
        name="delivery"
      />
    </Stack>
  );
}