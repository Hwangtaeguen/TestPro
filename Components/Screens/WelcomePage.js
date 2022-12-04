import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {View, Button, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';


const welcomepage = (props) => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={{flex:1,flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
            <View style={{flex:1.7}}/>
            <Text style = {styles.Header}>Welcome,</Text>
            <Text style = {styles.text}>{route.params.username}!</Text>
            <Image
            style={{width:80,height:80, marginBottom:30}}
            source = {require("../../assets/smiling-face.png")}>
            </Image>
            <Text style = {styles.text}>PRESS THE PLAY BUTTON</Text>
            <Text style = {styles.text}>TO GET STARTED!</Text>
            <TouchableOpacity
                onPress={() => navigation.reset({routes: [{name: 'checkpage', params: {username2: route.params.username }}]})} 
                style={{width:40,height:40,}}>
                <Image
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                        overflow: 'hidden',
                    }}
                    source={require('../../assets/play.png')}
                />
            </TouchableOpacity>
            <View style={{flex:1.7}}/>
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
  
export default welcomepage;