import {ROUTER} from './src/constant/enums';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from './src/screens/Home';
import {BaseGallery} from './src/screens/BaseGallery/index';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name={ROUTER.APP_GALLERY} component={BaseGallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
