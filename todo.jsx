import React from 'react';
import { StyleSheet, Pressable, View, Text, Dimensions } from 'react-native';

function todo({task}) {
    return (
        <Pressable>
            <View style={styles.task}>
                <Text style={styles.taskText}>{task}</Text>
            </View>
      </Pressable>
    );
}

export default todo;

const styles = StyleSheet.create({
    task : {
        width: Dimensions.get("window").width * 0.9,
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