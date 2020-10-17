import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

export default function Communication() {
    const [qty, setQty] = useState(0);
    const data = [
        {
            title: 'Barang a',
            harga: '15.000.000',
            lokasi: 'Malang'
        },
        {
            title: 'Barang b',
            harga: '25.000.000',
            lokasi: 'Lumajang'
        },
        {
            title: 'Barang c',
            harga: '35.000.000',
            lokasi: 'Surabaya'
        },
        {
            title: 'Barang d',
            harga: '45.000.000',
            lokasi: 'Jakarta'
        },
        {
            title: 'Barang e',
            harga: '55.000.000',
            lokasi: 'Sidoarjo'
        }
    ];

    const addCart = () => {
        if (qty == 99) return alert('Maksimal yang bisa di tampung cart adalah 99 item');

        setQty(qty + 1)
    };

    const removeCart = () => {
        if (qty == 0) return alert('Cart Masih Kosong');

        setQty(qty -1);
    };

    return (
        <View>
            <Text style={styles.text}>Materi komunikasi antar komponen</Text>
            <Cart qty={qty} />
            <View style={styles.viewProduct}>
                <ScrollView horizontal>
                    {
                        data.map(x => (
                            <Product 
                                key={x.title}
                                title={x.title} 
                                lokasi={x.lokasi}
                                harga={x.harga}
                                addCart={addCart}
                                removeCart={removeCart}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
    viewProduct: {
        flexDirection: 'row'
    }
})
