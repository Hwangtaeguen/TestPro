import { View, Button, Text, TextInput } from 'react-native';
import { StyleSheet, Platform } from "react-native";

const StartQ = () => {
  return( 
    <View style={{alignItems:'center'}}>
        <View style={styles.shadow}>
            <Text>
                Todd orders pictures from a photographer. 
                Each picture costs $7.50.
                A one-time shipping fee of $3.25 is added
                to the cost of the order.
                The total cost of Todd’s order before tax is $85.75.

                How many pictures did Todd order?
            </Text>
        </View>
    </View>
)};

const styles = StyleSheet.create({
  shadow: {
    marginTop:20,
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor: "#fff",
    width: 300,
    height: 200,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});

export default StartQ;
