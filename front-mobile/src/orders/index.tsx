import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../header';
import OrderCard from './order-card';

export default function Orders() {

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            paddingRight: '5%',
            paddingLeft: '5%'
        }
    }
);
