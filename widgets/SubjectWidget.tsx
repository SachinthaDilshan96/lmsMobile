import { ScrollView, StyleSheet, Text, View } from "react-native";

const SubjectWidget =({navigation,subject}) =>{
  return(
    <View style={styles.view}>
      <Text style={{color: 'white'}}>{subject}</Text>
    </View>
);
};

const styles = StyleSheet.create({
  view: {
    paddingTop: 5,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 5,
    backgroundColor: '#16a085',
    borderRadius: 3,
    marginRight: 10,
  },

});

export default SubjectWidget;
