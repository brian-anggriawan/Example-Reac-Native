import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function StateDinamis() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.viewIndex}>
            <Text style={styles.text}>Materi Component State Dinamis</Text>
            <Text style={styles.count}>{count}</Text>
            <View style={styles.viewButton}>
                <Button 
                    title="tambah" 
                    style={styles.button}
                    onPress={() => {
                        let hasil = count + 1;

                        setCount(hasil);
                    }}
                />
                <Button 
                    title="Kurang" 
                    style={styles.button}
                    onPress={() => {
                        let hasil = count - 1;

                        if (count == 0) return alert('Nilai sudah 0 tidak bisa di kurangi')

                        setCount(hasil);
                    }}
                />
                <Button 
                    title="Reset" 
                    style={styles.button}
                    onPress={() => {
                        setCount(0);
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewIndex: {
        marginTop: 20
    },
    text: {
        textAlign: 'center'
    },
    count: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 30,
        fontWeight: 'bold'
    },
    viewButton: {
       flexDirection: 'row',
       justifyContent: 'space-around'
    }
})
