import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Start.js';
import Home from './Home.js';
import StartQ from './StartQ.js';
import ChooseQ from './ChooseQ.js';
import Solve from './Solve.js';
import Logins from './Login.js';
import signupscreen from './Signup.js';




const Stack = createStackNavigator()
const OPscreen = ()=>{
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='로그인 페이지'>

        <Stack.Screen name = "로그인 페이지" component={Logins}/>
        <Stack.Screen name = "회원가입 페이지" component={signupscreen}/>
        <Stack.Screen name = "StartQ" component={StartQ}/>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Start" component={Start}/>
        <Stack.Screen name = "ChooseQ" component={ChooseQ}/>
        <Stack.Screen name = "Solve" component={Solve}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}


export default OPscreen;