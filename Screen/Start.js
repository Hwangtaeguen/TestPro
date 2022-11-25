import { useNavigation } from '@react-navigation/native';
import {View, Button, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Start = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{flex:1,flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
            <View style={{flex:1}}/>
            <Text style = {styles.Header}>HELLO,</Text>
            <Text style = {styles.text}>EUNYOUNG!</Text>
            <Image
            style={{width:80,height:80, marginBottom:30}}
            source = {require("../assets/smiling-face.png")}>
            </Image>
            <Text style = {styles.text}>PRESS THE PLAY BUTTON</Text>
            <Text style = {styles.text}>TO GET STARTED!</Text>
            <TouchableOpacity
                //PLAY BUTTON, HOME화면 전환
                onPress={() => navigation.navigate("Home")}
                style={{width:40,height:40,}}>
                <Image
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    overflow: 'hidden',
                }}
                source={require('../assets/play.png')}
                />
            </TouchableOpacity>
            <View style={{flex:2}}/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    Header: {
        flex:0.5,
        textAlign:'center',
        justifyContent: 'center',
        fontSize:40,
        fontWeight:'bold',
        marginBottom: 0,
    },
    text: {
        flex:0.5,
        textAlign:'center',
        justifyContent: 'center',
        fontSize:28,
        fontWeight:'bold'
    },
});
  
export default Start;