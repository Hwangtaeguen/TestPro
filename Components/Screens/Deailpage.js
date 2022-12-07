import { View, Button, Text, TextInput, StyleSheet, Image,SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { 
    addDoc, 
    collection, 
    getDocs,
    doc,
    updateDoc,
    deleteDoc,  
    where,
    query,onSnapshot,setDoc
   } from "firebase/firestore"; 
import { db } from '../../firebase';
import { ScrollView } from 'react-native';




//기본 화면 컴포넌트
const detailpage = (props) => {

    const route = useRoute();
    const navigation = useNavigation();
    const name_route = route.params.namename;
    const score_route = route.params.score;
    const banban_route = route.params.banban;
    const email_route = route.params.email;

    const[ country,setCountry ]=useState("");
    const [ lenlen, setlenlen ] = useState("");
    const [ show , setshow ] = useState(false);


    const getan = async () => {
        try {        
        const q = query(collection(db, `/userInfo/${email_route}/Answers`), where('Qnum', "==", country))
        const data = await getDocs(q);
        const Data = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        const Exist = data.docs.map(doc => (doc.exists()))
        setlenlen(Data);
        console.log("dataaaaaaa",Data);
        console.log("dataaaaaaa",Exist);

        if(Exist[0]===true){
            setshow(true)
        }else{
            setshow(false)
        }

            
        } catch (error) {
            console.log(error);
            console.log(error.message);
        }

    }


        useEffect(()=>{
            getan();
        },[country]);


    const TFView = ()=>{
        return(
            show ? lenlen?.map((row,idx) => { //옵셔널 채이닝 : 에러가 발생하지 않을려고 user객체에 속성이없으면 애러발생함. ?쓰면 애러발생 없이 undefined반환
                return (
                  <View style={{backgroundColor:"#FFF", margin:20}}>
                    <Text style={{fontSize:25}}>Q</Text><Text> { row.Q }</Text>
                    <Text style={{fontSize:25}}>A</Text><Text>{ row.A }</Text>
            
                    </View>
                );
              })
              : <Text>아직 풀지 않은 문제입니다</Text>
        
    )}

    return(
        <SafeAreaView>
    <View>


        <View style={{flexDirection:'row', margin:10}}>
            <View style={{flex:1,backgroundColor:"#CECE"}}><Text style={{fontSize:20}} >학생이름: {name_route} </Text></View>
            <View style={{flex:1,backgroundColor:"#FEFE"}}><Text style={{fontSize:20}} >학생점수: {score_route}</Text></View>
            <View style={{flex:1,backgroundColor:"#CCEE"}}><Text style={{fontSize:20}} >학생반: {banban_route} </Text></View>
    </View>

   
<View style={{alignItems:'center'}}>
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


  <ScrollView>

<TFView/>
<View style={{margin:50}}></View>
    </ScrollView>
    
    </View>
    </View>
    </SafeAreaView>
    );
    }

export default detailpage;