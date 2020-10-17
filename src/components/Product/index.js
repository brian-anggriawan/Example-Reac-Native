import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import macbook from '../../assets/images/download.jpg';

export default function Product(props) {
    const [status, setStatus] = useState(false)
    const { title, harga, lokasi, addCart, removeCart } = props;

    const processCart = () => {
        if (status) {
            removeCart();
            setStatus(false);
        } else {
            addCart();
            setStatus(true);
        }
    };

    return (
        <View style={{ marginRight: 20}}>
            <View 
                style={{
                    padding: 12,
                    backgroundColor: '#f2f2f2',
                    width: 212,
                    height: 261,
                    borderRadius: 8
                }}
            >
                <Image 
                    source={macbook}
                    style={{ 
                        width: 188, 
                        height: 107,
                        borderRadius: 8
                    }} 
                />
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        marginTop: 16
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        color: '#f2994a',
                        marginTop: 14,
                        fontWeight: 'bold',
                        fontSize: 12
                    }}
                >
                    Rp. {harga}
                </Text>
                <Text
                    style={{
                        fontSize: 12
                    }}
                >
                    {lokasi}
                </Text>
                <TouchableOpacity
                    onPress={processCart}
                >
                    <View
                        style={{
                            backgroundColor: status ? 'red' : '#6fcf97',
                            paddingVertical: 6,
                            borderRadius: 25,
                            marginTop: 20
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: '600',
                                color: 'white',
                                textAlign: 'center'
                            }}
                        >
                            BELI
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 40
    }
})
