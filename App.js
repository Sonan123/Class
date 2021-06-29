//import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/Home';
import ISSLocationScreen from './Screens/ISSLocation';
import MeteorScreen from './Screens/Meteor';
import UpdateScreen from './Screens/Update';



/*export default function App() {
  return (
    <View style={styles.container}>
      <UpdateScreen/>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
const Stack=createStackNavigator();


function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions = {{
        headerShown:false
      }}> 
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="ISSLocation" component={ISSLocationScreen}/>
      <Stack.Screen name="Meteors" component={MeteorScreen}/>
      <Stack.Screen name="Updates" component={UpdateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;