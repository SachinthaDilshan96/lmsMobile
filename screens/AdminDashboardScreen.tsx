import { StyleSheet, Text, View } from "react-native";

const AdminDashboardScreen = ({navigation}) => {
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
export default AdminDashboardScreen;
