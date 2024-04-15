import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from "react";

const SignupScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.flatList} >
        <View style={{alignItems: 'center', marginTop: 50, marginBottom: 50}}>
          <Text style={{fontSize: 30}}>Register Now</Text>
        </View>
        <View>
          <TextInput outlineColor={"#ecf0f1"} style={styles.input} label={"First Name"} value={firstName} mode={"outlined"} onChangeText={(text)=>setFirstName(text)}/>
        </View>
        <View>
          <TextInput outlineColor={"#ecf0f1"} style={styles.input} label={"Last Name"} value={lastName} mode={"outlined"} onChangeText={(text)=>setLastName(text)}/>
        </View>
        <View>
          <TextInput outlineColor={"#ecf0f1"} style={styles.input} label={"Email"} value={email} mode={"outlined"} onChangeText={(text)=>setEmail(text)}/>
        </View>
        <View>
          <TextInput outlineColor={"#ecf0f1"} style={styles.input} label={"Password"} secureTextEntry={true} value={password} mode={"outlined"} onChangeText={(text)=>setPassword(text)}/>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={[styles.button,{backgroundColor: 'white'}]}>
            <Text onPress={()=>navigation.navigate("LoginScreen")} style={{color: '#16a085', textDecorationLine: 'underline'}}>
              Already have an account? Login instead
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 0,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#3498db',
    width: '100%',
    height: 50,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default SignupScreen;
