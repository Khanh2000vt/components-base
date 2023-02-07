import {ROUTER} from './src/constants/enums';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BaseGallery, EXFormik, ExModal, Home} from '@screens';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name={ROUTER.APP_GALLERY} component={BaseGallery} />
        <Stack.Screen name={ROUTER.INPUT_FORMIK} component={EXFormik} />
        <Stack.Screen name={ROUTER.MODAL} component={ExModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
