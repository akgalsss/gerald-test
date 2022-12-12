import React from 'react';
import type { Node } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createAppNavigator } from './src/navigation/createAppNavigator';
import Page1 from './src/views/Page1';
import Page2 from './src/views/Page2';
import Page3 from './src/views/Page3';
import Page4 from './src/views/Page4';

const AppNavigaton = createAppNavigator();

const App = (): Node => {
  return <NavigationContainer>
    <AppNavigaton.Navigator>
      <AppNavigaton.Screen name='start' initialParams={{ title: 'Start' }} component={Page1} />
      <AppNavigaton.Screen name='cart' initialParams={{ title: 'Your Cart' }} component={Page2} />
      <AppNavigaton.Screen name='favorites' initialParams={{ title: 'Favorites' }} component={Page3} />
      <AppNavigaton.Screen name='orders' initialParams={{ title: 'Your Orders' }} component={Page4} />
    </AppNavigaton.Navigator>
  </NavigationContainer>
};

export default App;
