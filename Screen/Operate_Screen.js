import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Start from './Start';


const Stack = createStackNavigator()
const OPscreen = ()=>{
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "START" component={Start}/>
        <Stack.Screen name = "Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default OPscreen;