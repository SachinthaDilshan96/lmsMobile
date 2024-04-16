import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-paper';

const UserHomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.access} onPress={()=>{navigation.navigate("AdminDashboard")}}>
          <Text style={{color:'white',textAlign:'center',margin:'auto'}}>Access Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notification}>
          <View style={styles.badge}>
            <Text style={{color: 'white', fontSize: 10}}>15</Text>
          </View>
          <Icon size={20} source={'bell'} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#2c3e50',
    paddingRight: 15,
    paddingLeft: 15,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center'
  },
  notification: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  badge: {
    width: 15,
    height: 15,
    backgroundColor: '#3498db',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 10,
    zIndex: 10,
  },
  access: {
    width: 150,
    height: 35,
    backgroundColor: '#d35400',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center'
  }
});
export default UserHomeScreen;
