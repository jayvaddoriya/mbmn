import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import AllProspect from './screens/AllProspect';
import StrongProspect from './screens/StrongProspect';
import CloseProspect from './screens/CloseProspect';
import RelatedProspect from './screens/RelatedProspect';
import UnknownProspect from './screens/UnknownProspect';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AllProspect" component={AllProspect} />
        <Stack.Screen name="StrongProspect" component={StrongProspect} />
        <Stack.Screen name="CloseProspect" component={CloseProspect} />
        <Stack.Screen name="RelatedProspect" component={RelatedProspect} />
        <Stack.Screen name="UnknownProspect" component={UnknownProspect} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
