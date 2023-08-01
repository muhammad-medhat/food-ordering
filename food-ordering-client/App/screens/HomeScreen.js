import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import RestaurantCard from "../components/RestaurantCard";
import Search from "../components/Search";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { featured } from "../../data";
import Featured from "../components/Featured";
import { getFeaturedRestaurants, getRestaurants } from "../../api";
import Restaurants from "../components/Restaurants";

const HomeScreen = () => {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    // getFeaturedRestaurants().then((feat) => setFeaturedRestaurants(feat));
    // setFeaturedRestaurants(featured)
    // console.log(
    //   "*** Restaurants ***",
    //   typeof restaurants,
    //   JSON.stringify(restaurants, null, 3)
    // );
  }, [restaurants]);
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/************************************* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Restaurants"
            className="ml-2 flex-1"
            keyboardType="default"
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
        </View>
      </View>
      {/******************************************* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <Categories />
        <View className="mt-5">
          <Text>Featured Restaurants</Text>
          <Restaurants />
          {/* {featuredRestaurants?.length>0 ? (
            [featuredRestaurants].map((r, i) => (
              <Featured
                key={`feat-${i}`}
                title={r.title}
                description={r.description}
                restaurants={r.restaurants}
              />
            ))
          ) : (
            <Text>Nothing featured</Text>
          )} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
