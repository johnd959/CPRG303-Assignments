import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../components/Header';

function MainLayout({children})
{
    return(
        <View style={styles.container}>
            <Header></Header>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 20,
    },
});

export default MainLayout; 