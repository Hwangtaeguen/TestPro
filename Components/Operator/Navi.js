import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import welcomepage from '../Screens/WelcomePage.js';
import checkpage from '../Screens/CheckPage.js';
import detailpage from '../Screens/Deailpage.js';
import Logins from '../Screens/Login.js';
import { ScreenStackHeaderRightView } from 'react-native-screens';

const Stack = createStackNavigator()
const Navi = ()=>{
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logins">
      <Stack.Screen  name = "Logins" component={Logins}/>
      <Stack.Screen  name = "welcomepage" component={welcomepage}/>
        <Stack.Screen  name = "checkpage" component={checkpage}/>
        <Stack.Screen  name = "detailpage" component={detailpage}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Navi;