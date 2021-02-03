import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import fetchOrders from '../api';
import Header from '../header';
import { Order } from '../types';
import OrderCard from './order-card';

export default function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchOrders()
            .then(response => {
                setOrders(response.data);
            })
            .catch(response => {
                Alert.alert('Houve um erro ao buscar os pedidos.');
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text>Buscando pedidos...</Text>
                ) : (orders.map(order => (
                    <TouchableWithoutFeedback key={order.id}>
                        <OrderCard order={order} />
                    </TouchableWithoutFeedback>
                ))
                    )}
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
