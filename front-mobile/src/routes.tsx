import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import Home from "./home";
import Orders from "./orders";
import OrderDetails from './orders/order-details';


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
                        <Stack.Screen name='OrderDetails' component={OrderDetails}></Stack.Screen>
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