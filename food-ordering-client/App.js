import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Navigation from "./Navigation";
import Categories from "./App/components/Categories";
import HomeScreen from "./App/screens/HomeScreen";
import Navigation from "./App/Navigation";

export default function App() {
  // return <HomeScreen />;
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
