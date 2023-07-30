import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderListScreen from './components/OrderListScreen';
import AddOrderScreen from './components/AddOrderScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OrderList">
        <Stack.Screen name="OrderList" component={OrderListScreen} options={{ title: 'Order List' }} />
        <Stack.Screen name="AddOrder" component={AddOrderScreen} options={{ title: 'Add Order' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
