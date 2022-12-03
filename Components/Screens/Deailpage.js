import { View, Button, Text, TextInput, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

//기본 화면 컴포넌트
const detailpage = (props) =>{


    const[ country,setCountry]=useState("");

    return(
    <View>




        <View>
        <Text>일단 위 화면</Text>
    </View>

<View>
<Picker 
  style = {{height:40,width:150,backgroundColor:"#D8D8D8",}}
  selectedValue = {country}
  onValueChange={(val,idx)=>setCountry(val)}>
  <Picker.Item label='1반' value="1반" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='2반' value="2반" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='3반' value="3반" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='4반' value="4반" style={{alignItems:'center',fontSize:15,color:'#000000'}} ></Picker.Item>
  <Picker.Item label='5반' value="5반" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='6반' value="6반" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='7반' value="7반" style={{alignItems:'center',fontSize:15,color:'#000000'}}></Picker.Item>
  <Picker.Item label='8반' value="8반" style={{alignItems:'center',fontSize:15,color:'#000000'}} ></Picker.Item>
  </Picker>

  <Text>피커별 불러올 문제 답</Text>
</View>




        




    </View>
    )

};


export default detailpage;