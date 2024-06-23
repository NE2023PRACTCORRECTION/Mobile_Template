import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";

const TopFood = ({ image,place, name }) => {
  return (
    <ScrollView  className="h-full">
      <View className="h-[95px] w-full flex-row px-3 py-2 bg-[#1010470e] rounded-md mt-3">
        <View className="h-full w-[75px] bg-third rounded-md overflow-hidden">
          <Image   source={{ uri: image }} alt="" className="w-full h-full" />
        </View>
        <TouchableOpacity
          className="ml-5"
          onPress={() => router.push("/food-details")}
        >
          <Text className="text-secondary font-bold">{place}</Text>
          <Text className="text-third text-xs mt-3">{name}</Text>
          <View className="flex-row mt-3 items-center">
            <AntDesign name="star" size={15} color="#3EB075" />
            <Text className="ml-2 font-bold text-primary">4.8</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TopFood;
