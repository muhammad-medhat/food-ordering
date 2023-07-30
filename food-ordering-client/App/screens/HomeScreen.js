import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import Categories from "../components/Categories";
import Search from "../components/Search";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { featured } from "../../data";
import Featured from "../components/Featured";

const HomeScreen = () => {
  const featuredRestaurants = featured;
  // console.log(JSON.stringify(featuredRestaurants, null, 3));
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/************************************* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Resturants"
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
          <Text>Featured restaurants</Text>
          {featuredRestaurants ? (
            [featuredRestaurants, featuredRestaurants].map((r, i) => (
              <Featured
                key={`feat-${i}`}
                title={r.title}
                description={r.description}
                restaurants={r.restaurants}
              />
            ))
          ) : (
            <Text>Nothing featured</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
