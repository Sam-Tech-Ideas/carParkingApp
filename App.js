import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const image = {
  uri: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
};

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

      {/**image section start */}
      <View className="my-8">
        <ImageBackground source={image} className="h-32" borderRadius={10}>
          <View className="p-4">
            <Text className="text-white">Hi Sam</Text>
            <Text className="text-white font-semibold text-3xl">
              Fresh start your journey
            </Text>
          </View>
        </ImageBackground>
      </View>
      {/**image section start */}

      {/**vehicle section start */}
      <View className="flex-row items-center gap-2">


        {/**View one start */}
        <View className="flex-row items-center gap-1 px-4 py-2 bg-black rounded-lg ">
          {/**icon view start */}
          <View>
            <AntDesign name="car" size={20} color="white" />
          </View>
          {/**icon view end */}
          {/**text view start */}
          <View>
            <Text className="text-white">Cars</Text>
          </View>
          {/**text view end */}
        </View>
        {/**View one end */}


        {/**View tow start */}
        <View className="flex-row items-center gap-1 px-4 py-2 rounded-lg bg-gray-100">
          <View>
 <Ionicons name="bus-outline" size={20}/>
          </View>
          <View>
<Text>
  Bus
</Text>
          </View>

        </View>
        {/**View two end */}
        {/**View 3 start */}
       
        {/**View 4 end */}
      </View>

      {/** vehicle section end*/}
    </SafeAreaView>
  );
}
