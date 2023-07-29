import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { categories } from "../../data";
import { ScrollView } from "react-native";
const Categories = () => {
  //   const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState();
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
        {categories.map((category) => {
          let btnClass =
            category._id === activeCategory ? " bg-gray-600" : " bg-gray-200";
          let textClass =
            category.i_d === activeCategory
              ? " font-semibold text-gray-800"
              : " text-gray-500";

          return (
            <View
              key={`cat-${category._id}`}
              className="flex justify-center items-center mr-6"
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                className={"p-1 rounded-full shadow " + btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text className={"text-sm " + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
