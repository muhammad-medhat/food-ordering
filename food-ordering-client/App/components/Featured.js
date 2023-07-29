import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { themeColors } from "../theme";
import RestaurantCard from "./RestaurantCard";

const Featured = ({ title, description, restaurants }) => {
  // console.log(featured);
  // const [activeCategory, setActiveCategory] = useState();
  // const [isActive, setIsActive] = useState(false);
  console.log("restaurants", JSON.stringify(restaurants, null, 3));
  return (
    <View>
      <View className="flex-row justify-between items-cernter px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>

        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {restaurants.map((res) => {
          return <RestaurantCard key={res._id} restaurant={res} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Featured;

const styles = StyleSheet.create({});
