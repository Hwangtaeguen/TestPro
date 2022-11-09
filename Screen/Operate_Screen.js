import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Start.js';
import Home from './#0_Home.js';
import StartQ from './#1_StartQ.js';



const Stack = createStackNavigator()
const OPscreen = ()=>{
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name = "StartQ" component={StartQ}/>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Start" component={Start}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}


export default OPscreen;