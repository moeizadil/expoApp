import { Link } from "expo-router";
import { View,Text } from "react-native";

const Index = () => {
  return <View style= {{backgroundColor:"red",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }}>
    <Text style={{fontSize:30 , fontWeight:"700"}}>"Hello Welcome to React Native Expo"</Text>
    <Link href={"/about"}> Go to About</Link>
  </View>
}
export default Index;
