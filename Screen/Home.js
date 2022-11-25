import { useNavigation } from '@react-navigation/native';
import { View, Button, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Image } from "react-native"


//이미지 URL 객체
const imageURL={
    'Jennifer' :  require("../assets/curtain.png"),
    'Todd' :  require("../assets/picture.png"),
    'Jen' :  require("../assets/run.png"),
    'Ava' :  require("../assets/shape.png"),
    'Mario' :  require("../assets/tent.png"),
    'Jim' :  require("../assets/car.png"),
    'Owen' :  require("../assets/bush.png"),
    'Elena' :  require("../assets/poker-cards.png")
}

//TouchableOpacity(클릭에 반응하는) 캐릭터 생성 컴포넌트
const Choose = (props) =>{
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => {return(navigation.navigate("StartQ",{title:props.title}))}}
            style={{width:40,height:40,alignItems:'center', marginBottom:20}}>
            <Image
            style={styles.image}
            source = {imageURL[props.name]}
            />
            <Text style={styles.text}>{props.title}</Text>
         </TouchableOpacity>
    );
}  

//*HOME VIEW*//
const Home = (props) => {
    return (
        <View style = {{flex:1,paddind:20}}>
            <ScrollView style = {{flex:8}}>
            <View style={{padding:20}}/>
            <View style = {{
                flex:0.3,
                flexDirection:'column',
                justifyContent:'space-around',
                alignItems:'center'
                }}>
                <Image
                style={{width:40,height:40,marginBottom:20}}
                source = {require("../assets/smiling-face.png")}/>
                <Text style={{fontSize:25, fontWeight:'bold'}}>CHOOSE WHAT YOU WANT!</Text>
            </View>
            <View style = {styles.Character}>
                <Choose name = 'Jen' title = "Jen's running goal 🏃‍♂️"/>
                <Choose name = 'Todd' title = "Todd's order 🖼️"/>
            </View>
            <View style = {styles.Character}>
                <Choose name = 'Mario' title = "Mario's camping 🏕️"/>
                <Choose name = 'Ava' title = "Ava's rectangle ⏹️" />
            </View>
            <View style = {styles.Character}>
                <Choose name = 'Jennifer' title = "Jennifer's curtains ✂️" />
                <Choose name = 'Elena' title = "Elena's cardgame 🃏"/>
            </View>
            <View style = {styles.Character}>
                <Choose name = 'Owen' title = "Owen's garden 🌱" />
                <Choose name = 'Jim' title = "Jim's rent Car 🚗"/>
            </View>
            <View style={{padding:50}}></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Character:{
        flex:2,
        marginTop:60,
        marginBottom:60,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    text:{
        padding:5, 
        width:160, 
        height:30, 
        textAlign:'center',
        fontSize:14, 
        fontWeight:'bold',
        backgroundColor:"#F9F8F8",
        overflow:"hidden", 
        backgrountRadius:8,
        borderColor:"#F9F8F8", 
        borderWidth:1, 
        borderRadius:8
    },
    image:{
        width: 80,
        height: 80,
        overflow: 'hidden',
        marginBottom:10,
    }
});

export default Home;