import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import troli from '../../assets/icons/troli.png';

export default function Cart(props) {
    let { qty } = props;

    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image 
                    source={troli}
                    style={styles.iconCart}
                />
                <Text style={styles.notif}>{qty}</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja Anda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        marginTop: 8,
        color: '#777777',
        fontWeight: '700'
    },  
    wrapper: {
        padding: 20,
        alignItems: 'center'
    },
    iconCart: {
        width: 50,
        height: 50
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#4398d1',
        borderRadius: 93/2,
        width: 93,
        height: 93,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6fcf97',
        padding: 4,
        borderRadius: 24,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0
    }
});
