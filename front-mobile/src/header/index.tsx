import { OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/assets/logo.png')} />
            <Text style={styles.text}>Ds Delivery</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA5C5C',
        height: 90,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color:'#ffffff',
        marginLeft:15,
        fontFamily:'OpenSans_700Bold'
    }
});

// Parei em 38:40