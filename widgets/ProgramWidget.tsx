import { ScrollView, StyleSheet, Text, View } from "react-native";
import SubjectWidget from "./SubjectWidget.tsx";

const ProgramWidget =({navigation}) =>{
  return(
    <View style={styles.view}>
      <Text style={styles.name}>Program Name</Text>
      <Text style={styles.amount}>25000</Text>
      <View style={styles.startDate}>
        <Text style={{color: 'white'}}>2023-01-01</Text>
      </View>
      <ScrollView style={styles.scroll} horizontal={true}>
        <SubjectWidget navigation={navigation} subject={'Java Script'} />
        <SubjectWidget navigation={navigation} subject={'Java'} />
        <SubjectWidget navigation={navigation} subject={'PHP'} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    borderRadius: 3,
    backgroundColor: '#bdc3c7',
    padding: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    color: '#000',
  },
  amount: {
    color: '#d35400',
  },
  startDate: {
    width: 120,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d35400',
    borderRadius: 50,
    marginTop: 15,
  },
  scroll: {
    marginTop: 20,
  }
});

export default ProgramWidget;
