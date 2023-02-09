import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './store'
import './stylesheet.js'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Profile Screen!</Text>
      <Button mode="contained" icon="home" color="blue" 
        onPress={()=>navigation.navigate("Home")}>
          Go to Home Screen
      </Button>
    </View>
  )
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native Home Screen!</Text>
      <Button mode="contained" icon="account" color="blue" 
        onPress={()=>navigation.navigate("Profile")}>
          Go to Profile Screen
      </Button>
    </View>
  )
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} 
            options={{headerShown:false}} 
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
});

export default App;


