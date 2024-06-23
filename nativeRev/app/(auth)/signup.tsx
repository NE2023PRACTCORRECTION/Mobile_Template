import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import axios from "axios";
import * as Yup from "yup";
import API_URL, { sendRequest } from "../../config/api";

const SignUp = () => {
  const insets = useSafeAreaInsets();
  const [fullnames, setFullNames] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const [isSelected, setSelection] = useState(false);


  const handleSignUp = async () => {
    const validationSchema = Yup.object().shape({
      fullnames: Yup.string().required("fullname is required"),
      phone: Yup.string().required("phone is required"),
      email: Yup.string().required("email is required"),
      password: Yup.string().required("password is required")
    });

    const user = {
      fullnames,
      phone,
      email,
      password
    };

    try {
      await validationSchema.validate(user);

      const response = await axios.post(
        "http://10.5.221.141:5000/auth/user/create",
        user,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Response data:", response.data);

      if (response.status === 200) {
        const userData = response.data;
        console.log("Token data:", userData); // Log tokenData
        setUserData(userData);
        console.log("Success", "User created successfully!");
      } else {
        console.log("Error", "Failed to create user.");
      }

      router.push("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          marginTop: 100
        }}
      >
        <View className="h-full bg-white w-full rounded-t-[25px] flex items-center mt-0 ">
          <TouchableOpacity
            onPress={() => {
              router.push("/");
            }}
          >
            <Text className="text-4xl font-bold">
              Supa
              <Text className="text-primary">Menuuu</Text>
            </Text>
          </TouchableOpacity>
          <View className="flex flex-col items-center gap-2 py-5">
            <Text className="font-bold text-secondary text-lg">
              Welcome ...
            </Text>
            <Text className="text-third">Please fill in the information.</Text>
          </View>
          <View className="flex flex-col w-full">
            <View className="flex flex-row items-center justify-between border w-full h-[50px] rounded-md border-third overflow-hidden py- pl-4">
              <FontAwesome name="user-o" size={24} color="#b1b6c8" />
              <TextInput
                placeholder="Full Name"
                onChangeText={(text) => setFullNames(text)}
                value={fullnames}
                className="flex-1 px-3 items-center h-[50px]"
              />
            </View>
            <View className="flex flex-row items-center mt-2 justify-between border w-full h-[50px] rounded-md border-third p-4">
              <FontAwesome5 name="phone-alt" size={15} color="#b1b6c8" />
              <TextInput
                placeholder="Phone Number"
                onChangeText={(phone) => setPhone(phone)}
                value={phone}
                className="flex-1 px-3 items-center h-[50px]"
              />
            </View>
            <View className="flex flex-row items-center mt-2 justify-between border w-full h-[50px] rounded-md border-third p-4">
              <MaterialCommunityIcons
                name="email-outline"
                size={18}
                color="#b1b6c8"
              />
              <TextInput
                placeholder="Your Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                className="flex-1 px-3 items-center h-[50px]"
              />
            </View>
            <View className="flex flex-row items-center mt-2 justify-between border w-full h-[50px] rounded-md border-third overflow-hidden py-4 pl-4">
              <MaterialIcons name="lock-outline" size={17} color="#b1b6c8" />
              <TextInput
                placeholder="Password"
                className="flex-1 px-3 items-center h-[50px]"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry // Hide password
              />
            </View>
          </View>

          <Text className="text-third font-bold mt-4">OR</Text>
          <Text className="text-third py-1 font-bold">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-bold">
              Login
            </Link>
          </Text>

          <View className="flex w-full items-center py-4">
            <CustomButton
              handlePress={handleSignUp}
              content="Sign Up"
              otherStyles={undefined}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
