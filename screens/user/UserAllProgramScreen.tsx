import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProgramWidget from "../../widgets/ProgramWidget.tsx";

const UserAllProgramScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <ProgramWidget navigation={navigation} />
      <ProgramWidget navigation={navigation} />
      <ProgramWidget navigation={navigation} />
      <ProgramWidget navigation={navigation} />
      <ProgramWidget navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});
export default UserAllProgramScreen;
