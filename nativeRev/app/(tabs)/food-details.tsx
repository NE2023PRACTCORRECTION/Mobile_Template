import { SafeAreaView, ScrollView, View ,Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FoodDetails  = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle ={{
                width:"100%",
                marginTop:50
            }}>
                <View>
                    <Text>welcomeeeeeddddddddddeeeeeeee</Text>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
export default FoodDetails ;