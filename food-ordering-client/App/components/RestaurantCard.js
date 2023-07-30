import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ restaurant }) => {
  // console.log(
  //   "restaurant restaurant card in homepage__________ ",
  //   JSON.stringify(restaurant, null, 3)
  // );
  const nav = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => nav.navigate("Restaurant", { restaurant })}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
          backgroundColor: "#ddd",
          // backgroundColor: "red",
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        {/* <Text>restaurant card ID: {restaurant._id}</Text> */}
        <Image
          className="h-36 w-64 rounded-t-3xl items-center"
          source={restaurant.image}
        />
        <View className="px-3 pb-4 space-y-2">
          <View className="flex-row restaurants-center space-x-1">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="h-4 w-4"
            />
            <Text className="text-lg font-bold pt-2">{restaurant.name}</Text>
            <Text className="text-xs">
              <Text className="text-green-700">{restaurant.rating}</Text>
              <Text className="text-gray-700">
                ({restaurant.reviews} review.)
              </Text>

              <Text className="font-semibold text-gray-700">
                {restaurant.type}
              </Text>
            </Text>
          </View>
          {/* <View>
            <Text>{JSON.stringify(restaurant, null, 3)}</Text>
          </View> */}
          <View className="flex-row restaurants-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs">
              Nearby · {restaurant.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({});
