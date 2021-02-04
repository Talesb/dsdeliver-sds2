import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../header';
import { Order } from '../types';
import OrderCard from './order-card';

export default function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then((response: any) => {
                setOrders(response.data);
            })
            .catch((response: any) => {
                Alert.alert('Houve um erro ao buscar os pedidos.');
            })
            .finally(() => setIsLoading(false));
    }

    // Forçando atualização do componente
    useEffect(() => {
        if (isFocused) {
            fetchData();
        }
    }, [isFocused]);





    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', {
            order
        });
    };

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text>Buscando pedidos...</Text>
                ) : (orders.map(order => (
                    <TouchableWithoutFeedback key={order.id} onPress={() => handleOnPress(order)}>
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
