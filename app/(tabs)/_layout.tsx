import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


const screenOptionsStyle = {
  tabBarActiveTintColor: "#ffd33d",
  headerStyle: {
    backgroundColor: "#25292e",
  },
  headerShadowVisible: false,
  headerTintColor: "#fff",
  tabBarStyle: {
    backgroundColor: "#25292e",
  },
};

const tabBarIconSize = 24;

// Main TabLayout component
export default function TabLayout() {
  return (
    <Tabs screenOptions={screenOptionsStyle}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={tabBarIconSize}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={tabBarIconSize}
            />
          ),
        }}
      />
    </Tabs>
  );
}
