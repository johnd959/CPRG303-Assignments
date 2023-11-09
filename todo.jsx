import React from 'react';
import { StyleSheet, Pressable, View, Text } from 'react-native';

function todo({task}) {
    return (
        <Pressable>
            <View>
                <Text>{task}</Text>
            </View>
      </Pressable>
    );
}

export default todo;

const styles = StyleSheet.create({
    task : {
        marginVertical: 5,
        padding: 10,
        backgroundColor: 'tomato',
        borderRadius: 5, 
      },
      taskText : {
        fontSize: 18,
        color: 'white',
      },
      completed : {
        backgroundColor: 'crimson'
      },
})