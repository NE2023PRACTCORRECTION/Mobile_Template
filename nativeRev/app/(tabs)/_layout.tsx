import { Tabs } from "expo-router";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false
        }}
      >
        <Tabs.Screen
          name="menu"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center gap-22">
                <AntDesign
                  name="home"
                  size={35}
                  color={focused ? "#FFA500" : "#484848"}
                />
              </View>
            )
          }}
        />
        <Tabs.Screen
          name="food-details"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center gap-22">
                <FontAwesome5
                  name="hamburger"
                  size={24}
                  color={focused ? "#FFA500" : "#484848"}
                />
              </View>
            )
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
