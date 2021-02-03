import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";
import Orders from "./orders";
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const Stack = createStackNavigator();


export default function Routes() {

    return (
        <>
            {/* <View style={styles.container}>
                <StatusBar style="light" /> */}
                <NavigationContainer>
                    <Stack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#FFF' } }}>
                        <Stack.Screen name='Home' component={Home}></Stack.Screen>
                        <Stack.Screen name='Orders' component={Orders}></Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>
            {/* </View> */}
        </>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     }
// });