import {StatusBar} from "expo-status-bar";
import {Text, View} from "react-native";

export default function App() {
  return (
    <View className="items-center bg-red-800">
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}
