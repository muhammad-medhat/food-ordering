import React, { useEffect, useState } from "react";
// import { restaurants } from "../../data";
import {
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { getRestaurants } from "../../api";
import { urlFor } from "../../sanity";
import { themeColors } from "../theme";
import { useNavigation } from "react-router";
import RestaurantCard from "./RestaurantCard";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  // const nav = useNavigation();
  useEffect(() => {
    getRestaurants().then((rest) => {
      setRestaurants(rest);
    });
  }, [restaurants]);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {restaurants ? (
          restaurants.map((restaurant) => {
            const { image, name, rating, reviews, type } = restaurant;
            {
              /* console.log("nnnn", name);
            console.log("img", image); */
            }

            return (
              <View
                key={`cat-${restaurant._id}`}
                className="flex justify-center items-center mr-6"
              >
                <RestaurantCard restaurant={restaurant} />
                {/* <View>
            <Text>{JSON.stringify(restaurant, null, 3)}</Text>
          </View> */}
              </View>
            );
          })
        ) : (
          <View>
            <Text>NNNNNNNNN</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Restaurants;
