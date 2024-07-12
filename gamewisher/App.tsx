import {StatusBar} from "expo-status-bar";
import {Text, View} from "react-native";

export default function App() {
  return (
    <View className="items-center bg-red-900">
      <Text>Hello NativeWind</Text>
      <StatusBar style="auto" />
    </View>
  );
}
