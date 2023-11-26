import {View, StyleSheet, TouchableOpacity, Image} from 'react-native'

export default function Header({})
{
    return(
        <View style={styles.header}>
            <TouchableOpacity>
                <Image style={styles.image} source={require('../../assets/images/ToDo\..png')}></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        backgroundColor: '#F1EFE7',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image : {
        height: 50,
        width: 150,
    }
})