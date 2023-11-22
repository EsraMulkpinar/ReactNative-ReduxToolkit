import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection:'row'
  },
   button: {
    backgroundColor: 'gray',
    padding: 30,
    borderRadius: 10,
    margin: 40,
  },
  buttonText:{
    color:"white",
    fontSize:20,
  },
    text: {
    fontSize: 20
  }
});
