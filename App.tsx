import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerType:'front',
          swipeEnabled:true,
          swipeEdgeWidth: 100,
          headerTransparent: true,
          headerTitle: '',
          overlayColor: 'rgba(0,0,0,0.5)' 
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* <Drawer.Screen name="Profile" component={ProfileScreen} /> */}
        <Drawer.Screen 
          name="Settings" 
          component={SettingScreen}   
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;  