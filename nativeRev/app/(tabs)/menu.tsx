// import { SafeAreaView, ScrollView, View ,Text,Image} from "react-native"
// import { useSafeAreaInsets } from "react-native-safe-area-context"
// import { AntDesign } from "@expo/vector-icons";
// import TopFood from "@/components/TopFood";
// import { useEffect, useState } from "react";



// const Menu = () => {
//     const insets   =  useSafeAreaInsets()
//     const [foodInfo, setFoodInfo] = useState([])

//     useEffect({

//     })

//     // const foodInfo = [
//     //   {
//     //     id: 1,
//     //     name: "Fresh Juice",
//     //     place: "Kigali",
//     //     image: require("../../assets/images/facebook.png")
//     //   },
//     //   {
//     //     id: 2,
//     //     place: "Kigali",
//     //     name: "Fresh Juice",
//     //     image: require("../../assets/images/facebook.png")
//     //   },
//     //   {
//     //     id: 3,
//     //     place: "Kigali",
//     //     name: "Fresh Juice",
//     //     image: require("../../assets/images/facebook.png")
//     //   },
//     //   {
//     //     id: 4,
//     //     place: "Kigali",
//     //     name: "Fresh Juice",
//     //     image: require("../../assets/images/facebook.png")
//     //   },
//     //   {
//     //     id: 5,
//     //     place: "Kigali",
//     //     name: "Fresh Juice",
//     //     image: require("../../assets/images/facebook.png")
//     //   },
//     //   {
//     //     id: 6,
//     //     place: "Kigali",
//     //     name: "Fresh Juice",
//     //     image: require("../../assets/images/facebook.png")
//     //   }
//     // ];
//     return (
//       <SafeAreaView className="">
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{
//             height: "100%",
//             marginTop: 50
//           }}
//         >
//           <View className="flex ">
//             <View className="bg-gray-50 w-10 h-13 pl-2">
//               <AntDesign name="left" size={24} color="#FFA500" />
//             </View>
//             <View className="w-full   border mt-2 border-b-gray-50 "></View>
//             <Text className=" text-center text-primary">
//               Nearby Restaurants
//             </Text>
//             <View className="px-5 py-3">
//               <Text className="text-primary font-bold">Popular Food 🍕</Text>
//               <ScrollView className="py-3" >
//                 {foodInfo.map((item, index) => (
//                   <TopFood key={index} image={item.image} name={item.name} place={item.place} />
//                 ))}
//               </ScrollView>
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     );
// }

// export default Menu;


import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios"; // Import Axios

import TopFood from "@/components/TopFood"; // Assuming TopFood component is correctly imported

const Menu = () => {
  const insets = useSafeAreaInsets();
  const [foodInfo, setFoodInfo] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "http://10.5.223.243:8000/all/restaurants"
        );
        setFoodInfo(response.data); // Assuming response.data is an array of restaurant objects
       
        
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRestaurants();
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: insets.top + 50 // Adjust for safe area insets
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "#F0F0F0",
              width: 40,
              height: 40,
              paddingLeft: 10
            }}
          >
            <AntDesign name="left" size={24} color="#FFA500" />
          </View>
          <View
            style={{
              width: "100%",
              borderBottomWidth: 1,
              borderBottomColor: "#E5E5E5",
              marginTop: 10
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10
            }}
          >
            Nearby Restaurants
          </Text>
          <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
            <Text
              style={{ color: "#FFA500", fontSize: 16, fontWeight: "bold" }}
            >
              Popular Food 🍕
            </Text>
            <ScrollView style={{ marginTop: 10 }}>
              {foodInfo.map((item) => (
                <TopFood
                  key={item.id}
                  image={item.image}
                  place={item.address}
                  name={item.place}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
