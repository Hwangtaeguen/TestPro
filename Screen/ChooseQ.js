import { View, Button, Text, TextInput, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


//기본 화면 컴포넌트
const Main = (props) =>{
return(
<View style={{alignItems:'center'}}>
        <View style={styles.box}>
            <Text>
                Todd orders pictures from a photographer.
                Each picture costs $7.50.
                A one-time shipping fee of $3.25 is added
                to the cost of the order.
                The total cost of Todd’s order before tax is $85.75.

                How many pictures did Todd order?
            </Text>
        </View>
        <Text style={{marginTop:20, fontSize:18}}>Which stratege do you want to try?😀</Text> 
        <Bar contents="전략1"></Bar>
        <Bar contents="전략2"></Bar>
        <Bar contents="전략3"></Bar>
        <Bar contents="전략4"></Bar>
</View>
)}

//Bar를 firebase전략의 개수만큼 동적 할당해야함

//Bar: 전략선택 Touchableopacity 컴포넌트
const Bar = (props) => {
  const navigation = useNavigation();
    return(
        <TouchableOpacity
         style={{width:300,height:50,alignItems:'center',backgroundColor: '#3498db',
         padding: 16,
         margin: 10,
         borderRadius: 8,
         }}
         onPress={()=> navigation.navigate("Solve")}>
        <Text>{props.contents}</Text>
        </TouchableOpacity>
    )
}

//*ChooseQ VIEW*//
const ChooseQ = (props) =>{
const nav = (ScreenName) => {props.navigation.navigate(ScreenName)}
  return(
      <View>
        <Main nav={nav}/>
      </View>
)}

//스타일시트
const styles = StyleSheet.create({
  box: {
    marginTop:20,
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor: "#fff",
    width: 300,
    height: 200,
  },
});

export default ChooseQ;