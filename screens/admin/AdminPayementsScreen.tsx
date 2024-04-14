import { StyleSheet, Text, View } from "react-native";

const AdminPayementsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AdminPayementsScreen;
