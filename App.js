import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";


export default function App() {
  return (
    <SafeAreaView className="p-8">
      {/**top section start */}
      <View className="flex-row justify-between items-center">
        {/**child one view start  */}
        <View className="flex-row items-center gap-2">
          {/*icon section start */}
          <View>
            <FontAwesome name="map-marker" size={24} color="black" />
          </View>
          {/*icon section end */}

          {/**text location  section start */}
          <View>
            <Text>Location</Text>
            <Text className="font-bold ">Los Angeles,California,US</Text>
          </View>
          {/*text location  section end */}
        </View>
        {/**child one view end  */}

        {/**child two view start  */}
        <View>
          <Feather name="bell" size={24} color="black" />
        </View>
        {/**child two view end  */}
      </View>
      {/**top section end */}


      
    </SafeAreaView>
  );
}
