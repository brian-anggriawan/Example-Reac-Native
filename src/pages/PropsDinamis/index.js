import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import macbook from '../../assets/images/download.jpg';

const Story = (props) => {
    let { judul } = props;

    return (
        <View style={styles.storyItem}>
            <Image
                style={styles.image}
                source={macbook}
            />
            <Text style={styles.storyText}>{judul}</Text>
        </View>
    );
};

export default function PropsDinamis() {
    const data = [
        'Content 1',
        'Content 2',
        'Content 3',
        'Content 4',
        'Content 5',
        'Content 6',
        'Content 7',
        'Content 8',
        'Content 9',
        'Content 10'
    ];

    return (
        <View style={styles.storyView}>
            <ScrollView horizontal>
                {
                    data.map(x => (
                        <Story judul={x} key={x} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 70
    },
    storyItem: {
        alignItems: 'center',
        marginRight: 20
    },
    storyView: {
        flexDirection: 'row'
    },
    storyText: {
        maxWidth: 70,
        textAlign: 'center'
    }
})
