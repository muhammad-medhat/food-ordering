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
      <Search />
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
