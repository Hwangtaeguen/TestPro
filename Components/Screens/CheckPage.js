import { useNavigation } from '@react-navigation/native';
import { View, Button, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Image } from "react-native"
import { getAuth, signOut } from "firebase/auth";
import { async } from '@firebase/util';
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
import { useEffect, useState } from 'react';
import { db } from '../../firebase'
import { useRoute } from '@react-navigation/native';




//이미지 URL 객체
const imageURL = {
    'Jennifer': require("../../assets/curtain.png"),
    'Todd': require("../../assets/picture.png"),
    'Jen': require("../../assets/run.png"),
    'Ava': require("../../assets/shape.png"),
    'Mario': require("../../assets/tent.png"),
    'Jim': require("../../assets/car.png"),
    'Owen': require("../../assets/bush.png"),
    'Elena': require("../../assets/poker-cards.png")
}


const checkpage = (props) => {
    const route = useRoute();
    const mypoint = 100;
    const auth = getAuth();
    const navigation = useNavigation();
    const [review, setReview] = useState([]);
    const [addID, setaddID] = useState("아이디");//set은 바꿀때 
    const [name, setname] = useState("");
    const [banban, setbanban] = useState(banban);
    const aaa = [];
    const bbb = [];
    const [lenlen, setlenlen] = useState();

    const dddd = route.params.username2;


    const queryDB = async ()=>{ // 몇반인지 띄워주는 함수 
        
        try{
          const q = query(collection(db, "userInfo" ), where( "선생님아이디" , "==" , dddd))
          const singleDoc = await getDocs(q);
          const Data = singleDoc.docs.map(doc => ({ ...doc.data(), id: doc.id  }));
          console.log("선생님모든데이터",Data);
          console.log("선생님 반",Data[0].선생님반);
          setbanban(Data[0].선생님반);
          console.log("반반",banban);
          

        }catch(error){
          console.log(error.message)
        }
      }




      const queryD = async ()=>{ //학생이름 불러오는 함수
        try{
          const q = query(collection(db, "userInfo" ), where( "반" , "==" , banban))
          const singleDoc = await getDocs(q);
          const Data = singleDoc.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          const datalenght = Data.length;


          console.log("반반커리데이터",Data);

          for(let i in Data){
            if(Data[0]["반"] == banban){
                aaa[i] += Data[i]["학생이름"]
                bbb[i] += Data[i]["점수"]

            }
        }
        console.log("zz",aaa[0]);
        console.log("zz",aaa[1]);
        console.log("zz",bbb[0]);
        console.log("zz",bbb[1]);
        setlenlen(Data)

        }catch(error){
          console.log(error.message)
        }
      }

    
    queryDB();

    useEffect(()=>{
        queryD();
    },[banban]);



    return (
        <View><Text>{banban} 학생 리스트</Text>
            


        {lenlen?.map((row,idx) => {//옵셔널 채이닝 : 에러가 발생하지 않을려고 user객체에 속성이없으면 애러발생함. ?쓰면 애러발생 없이 undefined반환
        
        const namename = row.학생이름;
        const score = row.점수;
        return (
          <>
            <Text>{namename}</Text>
            <Text>{score}</Text>
            <Button title="학생세부정보"onPress={()=>{navigation.reset({routes: [{name: "detailpage" ,params:{namename:namename, score:score,banban:banban} }]})}}/>
          </>
        );
      })}

                <View style={{ padding: 20 }} />
                <View>
                    <Text>꼴등학생점수 : 00</Text>
                    <Text>학생들 평균 점수 : 00</Text>
                    <Text>1등학생 점수 : 00</Text>
                </View>
                    <ScrollView>
         
                    </ScrollView>
        
        </View>
    );


    
}



const styles = StyleSheet.create({
    Character: {
        marginTop: 50,
        marginBottom: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        padding: 5,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: "#F9F8F8",
        overflow: "hidden",
        backgrountRadius: 8,
        borderColor: "#F9F8F8",
        borderWidth: 1,
        borderRadius: 8
    },
    image: {
        width: 80,
        height: 80,
        overflow: 'hidden',
        marginBottom: 10,

    },
    points: {
        flex: 1,
        padding: 5,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: "#C1F4C5",
        overflow: "hidden",
        backgrountRadius: 8,
        borderColor: "#C1F4C5",
        borderWidth: 1,
        borderRadius: 8
    },
    mypoints: {
        flex: 1,
        padding: 5,
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',

    }
});

export default checkpage;