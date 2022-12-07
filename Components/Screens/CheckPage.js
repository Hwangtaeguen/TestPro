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
  query, onSnapshot, setDoc
} from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../../firebase'
import { useRoute } from '@react-navigation/native';


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


  const queryDB = async () => { // 몇반인지 띄워주는 함수 

    try {
      const q = query(collection(db, "userInfo"), where("선생님아이디", "==", dddd))
      const singleDoc = await getDocs(q);
      const Data = singleDoc.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      console.log("선생님모든데이터", Data);
      console.log("선생님 반", Data[0].선생님반);
      setbanban(Data[0].선생님반);
      console.log("반반", banban);


    } catch (error) {
      console.log(error.message)
    }
  }

  const queryD = async () => { //학생이름 불러오는 함수
    try {
      const q = query(collection(db, "userInfo"), where("반", "==", banban))
      const singleDoc = await getDocs(q);
      const Data = singleDoc.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      const datalenght = Data.length;


      console.log("반반커리데이터", Data);

      for (let i in Data) {
        if (Data[0]["반"] == banban) {
          aaa[i] += Data[i]["학생이름"]
          bbb[i] += Data[i]["점수"]

        }
      }
      console.log("zz", aaa[0]);
      console.log("zz", aaa[1]);
      console.log("zz", bbb[0]);
      console.log("zz", bbb[1]);
      setlenlen(Data)

    } catch (error) {
      console.log(error.message)
    }
  }




  queryDB();

  useEffect(() => {
    queryD();
  }, [banban]);



  return (
    <View style={{ alignItems: 'center', margin: 15 }}><Text style={{ fontSize: 20, }}>{banban} 학생 리스트</Text>
      <View style={{ flexDirection: 'row', backgroundColor: "#FFF", marginTop: 10 }}>
        <Text style={{ flex: 1 }}>Email</Text>
        <Text style={{ flex: 1 }}>이름</Text>
        <Text style={{ flex: 1 }}>총점수</Text>
        <Text style={{ flex: 1 }}>세부정보</Text>
      </View>
      {lenlen?.map((row, idx) => { //옵셔널 채이닝 : 에러가 발생하지 않을려고 user객체에 속성이없으면 애러발생함. ?쓰면 애러발생 없이 undefined반환

        const namename = row.학생이름;
        const score = row.점수;
        const emaill = row.아이디;

        return (
          <View style={{ flexDirection: 'row', backgroundColor: "#FFF", marginTop: 10 }}>
            <Text style={{ flex: 1 }}>{emaill}</Text>
            <Text style={{ flex: 1 }}> {namename}</Text>
            <Text style={{ flex: 1 }}>{score}/120</Text>
            <Button style={{ flex: 1 }} title="학생세부정보" color="#819FF7"
              onPress={() => navigation.navigate("detailpage" ,
                {
                  namename: namename,
                  score: score,
                  banban: banban,
                  email: emaill
                })} />
          </View>
        );
      })}
      <View style={{ padding: 20 }}/>
      <Button title='Logout' color="#FE642E" onPress={()=>{signOut(auth); navigation.navigate("Logins")}}></Button>
    </View>
  );



}


export default checkpage;