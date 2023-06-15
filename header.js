import { View, Text, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import image from './assets/icon.png'

function Header(){
    return(
        <View style={styles.header}>
            {/* <Icon name="google" size={30} color="#000000" /> */}
            <Image source={image}></Image>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flex: 1,

    }
})