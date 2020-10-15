import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import macbook from './assets/images/download.jpg';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';


const App = () => {
    return (
        <View>
            <ScrollView>
                <StyleSampleComponent />
                <FlexBox />
                <Position />
            </ ScrollView>
        </View>
        
    ); 
};

const StyleSampleComponent = () => {
    return (
        <View>
            <Text style={ styles.text }>Styling Component</Text>
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#0abde3',
                    borderWidth: 2,
                    borderColor: 'red',
                    marginTop: 20,
                    marginLeft: 20
                }} 
            />
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
                    New Macbook Pro 2019
                </Text>
                <Text
                    style={{
                        color: '#f2994a',
                        marginTop: 14,
                        fontWeight: 'bold',
                        fontSize: 12
                    }}
                >
                    Rp. 25.000.000
                </Text>
                <Text
                    style={{
                        fontSize: 12
                    }}
                >
                    Jakarta Barat
                </Text>
                <View
                    style={{
                        backgroundColor: '#6fcf97',
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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 40
    }
});

const SampleComponent = () => {
    return (
        <View>
            <View style={{ width: '100%', height: '10%', backgroundColor: '#0abde3'}}/>
            <Text>Brian Wahyu <LastName/></Text> 
            <Photo />
            <TextInput style={{ borderWidth: 1 }} />
            <BoxGreen />
            <Profile />
        </View>
    );
};

const LastName = () => {
    return <Text>Anggriawan</Text>
};

const Photo = () => {
    return (
        <Image 
            source={{ 
                uri: 'https://avatars1.githubusercontent.com/u/48538338?s=460&u=1269f5e1e5d75d004bc3ebd9e92b2b70925249cf&v=4' 
            }}
            style={{
                width: '30%',
                height: '30%'
            }}
        />
    );
};

class BoxGreen extends Component {
    render() {
        return <Text>Ini class component</Text>
    };
};

class Profile extends Component {
    render() {
        return (
            <View>
                <Image
                    source={{ 
                        uri: 'https://avatars1.githubusercontent.com/u/48538338?s=460&u=1269f5e1e5d75d004bc3ebd9e92b2b70925249cf&v=4' 
                    }}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50
                    }}
                />
                <Text
                    style={{
                        color: 'blue',
                        fontSize: 24
                    }}
                >
                    Brian Wahyu Anggriawan
                </Text>
            </View>
        );
    };
};

export default App;