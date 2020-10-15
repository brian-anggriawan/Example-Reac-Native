import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class FlexBox extends Component {
    render() {
        return (
            <View>
                <View 
                    style={{
                        flexDirection: 'row',
                        backgroundColor: '#c8d6e5',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <View 
                        style={{
                            height: 50,
                            backgroundColor: '#ee5253',
                            width: 50
                        }} 
                    />
                    <View 
                        style={{
                            height: 50,
                            backgroundColor: '#feca57',
                            width: 50
                        }} 
                    />
                    <View 
                        style={{
                            height: 50,
                            backgroundColor: '#1dd1a1',
                            width: 50
                        }} 
                    />
                    <View 
                        style={{
                            height: 50,
                            backgroundColor: '#5f27cd',
                            width: 50
                        }} 
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}
                >
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>Playlist</Text>
                    <Text>Komnuitas</Text>
                    <Text>Chanel</Text>
                    <Text>Tentang</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20
                    }}
                >
                    <Image 
                        source={{ uri: 'https://avatars1.githubusercontent.com/u/48538338?s=460&u=1269f5e1e5d75d004bc3ebd9e92b2b70925249cf&v=4'}}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            marginRight: 20
                        }}
                    />
                    <View>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}
                        >
                            brian-anggriawan
                        </Text>
                        <Text>100 Juta Subscriber </Text>
                    </View>
                </View>
            </View>
        ); 
    };
};

export default FlexBox;