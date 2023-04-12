import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeRestaurants from "./src/screens/HomeRestaurants";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeRestaurants />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
