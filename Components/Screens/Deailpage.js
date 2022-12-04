import { View, Button, Text, TextInput, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

//기본 화면 컴포넌트
const detailpage = (props) =>{
    const route = useRoute();
    const navigation = useNavigation();
    const name_route = route.params.namename;
    const score_route = route.params.score;
    const banban_route = route.params.banban;


    const[ country,setCountry]=useState("");





    return(
    <View>




        <View>
        <Text>학생이름 :{name_route} </Text>
        <Text>학생점수 : {score_route}</Text>
        <Text>학생반 :{banban_route} </Text>
    </View>

<View>
<Picker 
  style = {{height:40,width:150,backgroundColor:"#D8D8D8",}}
  selectedValue = {country}
  onValueChange={(val)=>setCountry(val)}>
  <Picker.Item label='Q1' value="Q1" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='Q2' value="Q2" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='Q3' value="Q3" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='Q4' value="Q4" style={{alignItems:'center',fontSize:15,color:'#000000'}} ></Picker.Item>
  <Picker.Item label='Q5' value="Q5" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='Q6' value="Q6" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='Q7' value="Q7" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='Q8' value="Q8" style={{alignItems:'center',fontSize:15,color:'#000000'}} ></Picker.Item>
  </Picker>



  <Text>피커별 불러올 문제 답</Text>
</View>




        




    </View>
    )

};


export default detailpage;