import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

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
        <Text style={{marginTop:20}}>what do you think the problem asking you to do?</Text>
        <TextInput 
        style={{marginTop:20}} placeholder="Write your answer" value={props.text}
        onChangeText={(text)=>{
          props.setText(text); 
        }}
        onSubmitEditing={()=>props.setmode("Answer")}
        />
</View>
)}

//축하메시지와 버튼 컴포넌트
const Celebrate = (props) => {
  return(
  <View>
    <Text style = {{backgroundColor:'#b7f4d8', textAlign:'center', fontSize:20, fontWeight:'bold'}}>
      ✨Good Job!😆✨
    </Text>
    <Button title="Let's solve it!" onPress={() => props.nav("ChooseQ")}></Button>
  </View>
  )}

//*StartQ VIEW*//
const StartQ = (props) => {
const [text, setText] = useState("");
const [mode, setmode] = useState("Question");   
let content = null;
const nav = (ScreenName) => {props.navigation.navigate(ScreenName)}
     //모드별 화면
     //mode 'Question': 기본 화면
     if(mode === "Question"){
      content = 
      <View>
        <Main text={text} setText={setText} mode={mode} setmode={setmode}/>
      </View>
      
      //mode 'Answer': 메시지, 버튼 추가
      }else if(mode === "Answer"){
      content = 
      <View>
        <Main text={text} setText={setText} mode={mode} setmode={setmode}/>
        <Celebrate nav={nav}/>
      </View>
      }
    
    //보여지는 화면
    return(content)
};

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

export default StartQ;



