import { useNavigation } from '@react-navigation/native';
import { View, Button, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Image } from "react-native"
import { getAuth, signOut } from "firebase/auth";
import { async } from '@firebase/util';
import { addDoc, collection, doc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase'

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

//*HOME VIEW*//
const Home = (props) => {
    const mypoint = 100;
    const auth = getAuth();
    const navigation = useNavigation();
    const [review, setReview] = useState([]);
    const [addID, setaddID] = useState("아이디");
    const [addRN, setaddRN] = useState("내용");

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
            console.log(error.massage)
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
            console.log(error.massage)
        }
    }

    return (
        <View style={{ flex: 1, paddind: 20, marginTop: 10, flexDirection: 'column', justifyContent: 'space-around' }}>
            <Button title='Logout' onPress={() => { signOut(auth); navigation.reset({ routes: [{ name: 'Login' }] }); }}></Button>
            <ScrollView style={{ flex: 8 }}>
                <TextInput
                    placeholder="내용입력"
                    value={addID}
                    onChangeText={setaddID} />
                <TextInput
                    placeholder="내용입력"
                    value={addRN}
                    onChangeText={setaddRN} />
                <Button title="DB에서 갖고오기" onPress={GetReview}></Button>
                <Button title="DB에 추가하기" onPress={AddReview}></Button>
                {review?.map((row, idx) => {
                    return (
                        <>
                            <Text>User- {row.ID}</Text>
                            <Text>{row.RV}</Text>
                        </>
                    )
                })}
                <View style={{ padding: 20 }} />
                <View style={{
                    flex: 0.3,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <Image
                        style={{ width: 40, height: 40, marginBottom: 20 }}
                        source={require("../../assets/smiling-face.png")} />
                    <Text style={{ flex: 1, fontSize: 25, fontWeight: 'bold' }}>CHOOSE WHAT YOU WANT!</Text>
                    <Text style={styles.mypoints}>❇️ MY POINTS: {mypoint} ❇️</Text>
                </View>
                <View style={styles.Character}>
                    <Choose name='Jen' title="Jen's running goal" />
                    <Choose name='Todd' title="Todd's order" />
                </View>
                <View style={styles.Character}>
                    <Choose name='Mario' title="Mario's camping" />
                    <Choose name='Ava' title="Ava's rectangle" />
                </View>
                <View style={styles.Character}>
                    <Choose name='Jennifer' title="Jennifer's curtains" />
                    <Choose name='Elena' title="Elena's cardgame" />
                </View>
                <View style={styles.Character}>
                    <Choose name='Owen' title="Owen's garden" />
                    <Choose name='Jim' title="Jim's rent Car" />
                </View>
                <View style={{ padding: 50 }}></View>
            </ScrollView>
        </View>
    );
}

//TouchableOpacity(클릭에 반응하는) 캐릭터 생성 컴포넌트
const Choose = (props) => {
    const navigation = useNavigation()
    const getPoint = 15;
    const totalPoint = 20;
    return (
        <TouchableOpacity
            onPress={() => { return (navigation.navigate("StartQ", { title: props.title })) }}
            style={{ alignItems: 'center' }}>
            <Image
                style={styles.image}
                source={imageURL[props.name]}
            />
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.points}>points {getPoint}/{totalPoint}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    Character: {
        marginTop: 50,
        marginBottom: 50,
        flexDirection: 'row',
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

export default Home;