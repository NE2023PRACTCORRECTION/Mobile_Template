import { SafeAreaView, ScrollView, View ,Text,TextInput, TouchableWithoutFeedback} from "react-native"
// import { TextInput } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const Search = () => {
    const insets =  useSafeAreaInsets();


    return (
      <SafeAreaView className="bg-primary h-full">
        <ScrollView
          contentContainerStyle={{
            height: "100%",
            marginTop: 60
          }}
        >
          <View className="bg-white flex-row items-center w-full h-[50px] rounded-full border-third pl-6 overflow-hidden">
            <Fontisto name="search" size={18} color="#3EB075" />
            <TextInput
              placeholder="Search for your preferred restaurant"
              className="text flex-1 ml-4 items-center h-[50px]"
              onFocus={() => router.push("menu")}
            />
          </View>
          <View className="bg-white rounded-md mt-6 w-full h-[370px] flex-col items-center py-20">
            <TouchableWithoutFeedback onPress={() => router.push("menu")}>
              <View className="flex-col items-center justify-center">
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={200}
                  color="black"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default Search ;