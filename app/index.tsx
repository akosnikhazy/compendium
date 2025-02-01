
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "@/screens/homescreen";
import CompendiumCamera from "@/screens/camera";
import SaveItem from "@/screens/saveitem";
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Index() {
  StatusBar.setHidden(true);
  return (
   
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }} >
        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          
        />
        <Stack.Screen
          name="Camera"
          component={CompendiumCamera}
        />
        <Stack.Screen
          name="SaveItem"
          component={SaveItem}
        />
      </Stack.Navigator>
  );
}
