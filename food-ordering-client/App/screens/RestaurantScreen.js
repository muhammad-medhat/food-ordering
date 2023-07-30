import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useParams } from "react-router";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const { params } = useRoute();
  const { restaurant } = params;

  const navigation = useNavigation();
  return (
    <>
      {/* <Text>{JSON.stringify(restaurant, null, 3)}</Text> */}

      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={restaurant.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{restaurant.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/fullStar.png")}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{restaurant.rating}</Text>
                  <Text className="text-gray-700">
                    ({restaurant.reviews} review)
                  </Text>
                  ·{" "}
                  <Text className="font-semibold text-gray-700">
                    {restaurant.type}
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs">
                  Nearby · {restaurant.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{restaurant.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {restaurant.dishes ? (
            restaurant.dishes.map((dish) => {
              return (
                <DishRow
                  key={dish._id}
                  {...dish}
                  // id={dish._id}
                  // name={dish.name}
                  // description={dish.description}
                  // price={dish.price}
                  // image={dish.image}
                />
              );
            })
          ) : (
            <Text>nothing</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
