import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import { SCREENS } from "../utils/router";

const Stack = createNativeStackNavigator();
const { HOMESCREEEN, PRODUCTSCREEN } = SCREENS;
const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={HOMESCREEEN} screenOptions={{ headerShown: false  }}>
      <Stack.Screen name={HOMESCREEEN} component={HomeScreen} />
      <Stack.Screen name={PRODUCTSCREEN} component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
