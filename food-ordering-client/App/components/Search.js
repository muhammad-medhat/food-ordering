import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

const Search = () => {
  return (
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
        <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
      </View>
    </View>
  );
};

export default Search;
