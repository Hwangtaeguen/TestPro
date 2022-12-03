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
    const [addRN, setaddRN] = useState("내용");
    const [banban, setbanban] = useState("");

    const GetReview = async () => {
        try {
            const data = await getDocs(collection(db, '/any/MBhsEMkdUy394BbELXLS/review'))
            const Data = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            console.log(Data)
            setReview(Data)
            console.log(Data[0].ID)
            const WantID = Data[0].ID
            console.log(WantID)
        } catch (error) {
            console.log(error.message)
        }
    }

    const docRef = doc(db, "any", "doc")
    const colRef = collection(docRef, "imadethis")
    const AddReview = async () => {
        try {
            await addDoc(colRef, {
                ID: addID,
                RN: addRN,
                createAt: new Date(),
            });
            alert("added")
            setaddID("")
            setaddRN("")
        } catch (error) {
            console.log(error.message)
        }
    }






    const queryDB = async ()=>{
        const dddd = route.params.username2;
        try{
          const q = query(collection(db, "TeacherUser" ), where( "아이디" , "==" , dddd))
          const singleDoc = await getDocs(q);
          const Data = singleDoc.docs.map(doc => ({ ...doc.data() }));
          console.log(Data);
          console.log(Data[0].반);
          setbanban(Data[0].반);
          console.log(ban);

        }catch(error){
          console.log(error.message)
        }
      }













    return (
        <View>
            <View><Text>{banban}</Text></View>
          
                <View style={{ padding: 20 }} />
                <View>
                    <Text>꼴등학생점수 : 00</Text>
                    <Text>학생들 평균 점수 : 00</Text>
                    <Text>1등학생 점수 : 00</Text>
                </View>
                    <ScrollView>
                    <Choose name='Jen' title="Jen's running goal" />
                    <Choose name='Todd' title="Todd's order" />
                    <Choose name='Mario' title="Mario's camping" />
                    <Choose name='Ava' title="Ava's rectangle" />
                    <Choose name='Jennifer' title="Jennifer's curtains" />
                    <Choose name='Elena' title="Elena's cardgame" />
                    <Choose name='Owen' title="Owen's garden" />
                    <Choose name='Jim' title="Jim's rent Car" />
                    <Choose name='Owen' title="Owen's garden" />
                    <Choose name='Jim' title="Jim's rent Car" />
                    <Choose name='Owen' title="Owen's garden" />
                    <Choose name='Jim' title="Jim's rent Car" />
                    <Choose name='Owen' title="Owen's garden" />
                    <Choose name='Jim' title="Jim's rent Car" />
                    <Choose name='Owen' title="Owen's garden" />
                    <Choose name='Jim' title="Jim's rent Car" />
                    <Choose name='Owen' title="Owen's garden" />
                    <Choose name='Jim' title="Jim's rent Car" />
                    <Choose name='Owen' title="Owen's garden" />
                    <Choose name='Jim' title="Jim's rent Car" />
                    </ScrollView>
                    <Button title='ddd' onPress={queryDB}/>
        
        </View>
    );
}

const Choose = (props) => {
    const navigation = useNavigation()
    const getPoint = 15;
    const totalPoint = 20;
    return (
        <Text>학생 이름 : ??점수 : ??
            <Button title='학생 새부정보' onPress={()=>{navigation.navigate("detailpage")}}></Button>
        </Text>
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