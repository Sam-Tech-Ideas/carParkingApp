import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const image = {
  uri: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
};

export default function App() {
  return (
    <SafeAreaView className="p-8">
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/**vehicle section start */}
          <View className="flex-row items-center gap-2">
            {/**View one start */}
            <View className="flex-row items-center gap-1 px-4 py-2 bg-black rounded-lg ">
              {/**icon view start */}

              <AntDesign name="car" size={20} color="white" />
              {/**icon view end */}
              <Text className="text-white">Cars</Text>
            </View>
            {/**View one end */}

            {/**View tow start */}
            <View className="flex-row items-center gap-1 px-4 py-2 rounded-lg bg-gray-100">
              <Ionicons name="bus-outline" size={20} />
              <Text>Bus</Text>
            </View>
            {/**View two end */}
            {/**View 3 start */}
            <View className="flex-row items-center gap-1 bg-gray-100 rounded-lg  px-4 py-2">
              <MaterialCommunityIcons
                name="gas-station-outline"
                size={24}
                color="black"
              />
              <Text>Gas</Text>
            </View>

            <View className="flex-row items-center gap-1 bg-gray-100 rounded-lg  px-4 py-2">
              <Ionicons name="boat-outline" size={20} color="black" />
              <Text>Boat</Text>
            </View>
            {/**View 4 end */}
          </View>
        </ScrollView>

        <View className="flex-row justify-between items-center my-4">
          <Text className="font-bold text-lg">Recent Place</Text>
          <Text>See more</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row items-center gap-4 ">
            <View className="bg-gray-100 h-48  rounded-lg">
              <Image
                borderRadius={6}
                source={{
                  uri: "https://images.unsplash.com/photo-1604063165585-e17e9c3c3f0b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                height={120}
                width={200}
              />
              <View className="flex-row justify-between px-2 py-1">
                <View>
                  <Text className="font-bold">Dak Parkingon</Text>
                  <Text>California, US</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color="gray" />
              </View>
              <View className="flex-row justify-between px-2">
                <Text className="text-gray-400 text-sm">2.5KM</Text>

                <Text className="text-green-600 text-sm">$300/Hour</Text>
              </View>
            </View>
            <View className="bg-gray-100 h-48  rounded-lg">
              <Image
                borderRadius={6}
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1673886205989-24c637783c60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                height={120}
                width={200}
              />
              <View className="flex-row justify-between px-2 py-1">
                <View>
                  <Text className="font-bold">Dak Parkingon</Text>
                  <Text>California, US</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color="gray" />
              </View>
              <View className="flex-row justify-between px-2">
                <Text className="text-gray-400 text-sm">2.5KM</Text>

                <Text className="text-green-600 text-sm">$500/Hour</Text>
              </View>
            </View>
            <View className="bg-gray-100 h-48  rounded-lg">
              <Image
                borderRadius={6}
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1673886205989-24c637783c60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                height={120}
                width={200}
              />
              <View className="flex-row justify-between px-2 py-1">
                <View>
                  <Text className="font-bold">Dak Parkingon</Text>
                  <Text>California, US</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color="gray" />
              </View>
              <View className="flex-row justify-between px-2">
                <Text className="text-gray-400 text-sm">2.5KM</Text>

                <Text className="text-green-600 text-sm">$400/Hour</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View className="flex-row justify-between my-4 items-center">
          <Text className="font-bold text-lg">Last Parking Space</Text>
          <Text>See more</Text>
        </View>

        <View className="gap-4 ">
          <View className="flex-row  rounded-lg ">
            <Image
              borderRadius={6}
              source={{
                uri: "https://images.unsplash.com/photo-1604275291560-55f54cec0e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              height={100}
              width={100}
            />
            <View className="flex-1 items-center bg-gray-100 p-2 rounded-r-lg">
              <View className=" justify-between flex-1">
                <View className="flex-row justify-between w-full gap-2">
                  <View>
                    <Text>BTC Parking Mall</Text>
                    <Text className="text-gray-400">West Java, Bandung</Text>
                  </View>

                  <Entypo name="dots-three-horizontal" size={24} color="gray" />
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-gray-400">0.5KM</Text>
                  <Text className="text-green-600">$300/Hour</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex-row  rounded-lg ">
            <Image
              borderRadius={6}
              source={{
                uri: "https://images.unsplash.com/photo-1604275291560-55f54cec0e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              height={100}
              width={100}
            />
            <View className="flex-1 items-center bg-gray-100 p-2 rounded-r-lg">
              <View className=" justify-between flex-1">
                <View className="flex-row justify-between w-full gap-2">
                  <View>
                    <Text>BTC Parking Mall</Text>
                    <Text className="text-gray-400">West Java, Bandung</Text>
                  </View>

                  <Entypo name="dots-three-horizontal" size={24} color="gray" />
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-gray-400">0.5KM</Text>
                  <Text className="text-green-600">$300/Hour</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/** vehicle section end*/}
      </ScrollView>
    </SafeAreaView>
  );
}
