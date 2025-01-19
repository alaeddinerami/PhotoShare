import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import SignUp from "@/components/auth/SignUp";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#FF4646", "#FF8585", "#FFF5C0"]} 
      start={{ x: 0, y: 0.5 }} 
      end={{ x: 1, y: 1 }}   
      className="flex-1 justify-center px-3 " >
      <SignUp />
    </LinearGradient>
  );
}
