import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';

//메인 화면 컴포넌트
const Main = (props) => {
  const route = useRoute()
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.box}>
        <Text style={styles.Header}>{route.params.title}</Text>
        <Questions />
      </View>
      <Text style={{ marginTop: 20, padding: 10, fontSize: 23, fontWeight: 'bold' }}>💡what do you think {"\n"}      the problem asking you to do?</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your answer"
        value={props.text}
        onChangeText={(text) => {
          props.setText(text);
        }}
        onSubmitEditing={() => props.setmode("Answer")}
      />
    </View>
  )
}

//축하메시지와 버튼 컴포넌트
const Celebrate = (props) => {
  return (
    <View>
      <Text style={{ backgroundColor: '#b7f4d8', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
        ✨Good Job!😆✨
      </Text>
      <Button title="Let's solve it!" onPress={() => props.nav("ChooseQ")}></Button>
    </View>
  )
}

//*StartQ VIEW*//
const StartQ = (props) => {
  const [text, setText] = useState("");
  const [mode, setmode] = useState("Question");
  let content = null;
  const nav = (ScreenName) => { props.navigation.navigate(ScreenName) }
  //모드별 화면
  //mode 'Question': 기본 화면
  if (mode === "Question") {
    content =
      <View>
        <Main text={text} setText={setText} mode={mode} setmode={setmode} />
      </View>

    //mode 'Answer': 메시지, 버튼 추가
  } else if (mode === "Answer") {
    content =
      <View>
        <Main text={text} setText={setText} mode={mode} setmode={setmode} />
        <Celebrate nav={nav} />
      </View>
  }

  //보여지는 화면
  return (content)
};

//동적 질문 할당
const Questions = () => {
  return (
    <Text style={styles.text}>
      Todd orders pictures from a photographer.
      Each picture costs $7.50.
      A one-time shipping fee of $3.25 is added
      to the cost of the order.
      The total cost of Todd’s order before tax is $85.75.{"\n"}{"\n"}{"\n"}

      How many pictures did Todd order?
    </Text>
  )
}

//스타일시트
const styles = StyleSheet.create({
  box: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: "#F9F8F8",
    width: 350,
    height: 270,
    backgrountRadius: 8,
    borderColor: "#a2d2ff",
    borderWidth: 3,
    borderRadius: 20,
  },
  text: {
    marginTop: 23,
    marginLeft: 23,
    marginRight: 23,
    fontSize: 16,
    textAlign: 'center'
  },
  Header: {
    marginTop: 0,
    fontSize: 20,
    padding: 10,
    backgroundColor: "#a2d2ff",
    width: 350,
    height: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    overflow: "hidden",
    backgrountRadius: 8,
    borderColor: "#a2d2ff",
    borderWidth: 1,
    borderRadius: 20,
  },
  input: {
    margin: 20,
    height: 40,
    width: 300,
    borderColor: "#7a42f4",
    borderWidth: 1,
  }
});

export default StartQ;



