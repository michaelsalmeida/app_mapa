import { View, Text, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import image from './assets/image.png'

export default function Header(){
    return(
        <View style={styles.header}>
            {/* <Icon name="google" size={30} color="#000000" /> */}
            <Image style={styles.img} source={image}></Image>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C3BDBD',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    img:{
        width: 50,
        resizeMode: 'contain'
    }
})