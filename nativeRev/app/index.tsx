import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Redirect } from "expo-router";
import { useState } from "react";

const App = () => {
  const insets = useSafeAreaInsets();
  const [redirect, setRedirect] = useState(null);

  if (redirect) {
    return <Redirect href={redirect} />;
  }

  return (
    <SafeAreaView
      className="flex-1 bg-primary"
      style={{ paddingTop: insets.top }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center">
          <Text className="text-2xl text-center mb-6 text-white">
            WELCOME TO MY SYSTEM
          </Text>
          <View className="w-3/4">
            <TouchableOpacity
              className=" border border-white py-3 rounded-lg mb-4"
              onPress={() => setRedirect("/login")}
            >
              <Text className="text-white text-center text-lg">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="border border-white py-3 rounded-lg"
              onPress={() => setRedirect("/signup")}
            >
              <Text className="text-white text-center text-lg">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
