import { Text, View, StyleSheet, Image, Switch } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [Enable, setEnable] = useState('');

  return (
    <View style = {{backgroundColor: Enable ? "yellow":"black"}}>
      <View style = {styles.center}>
        <Text style = {{marginTop: 300, fontSize: 25, color: Enable ? "black":"white"}}>AMC MP1</Text>
        <Image source = {Enable ? require('./light.jpg'):require('./bulb.jpg')} style={styles.img}/>
        <Switch
        trackColor = {{false: "gray", true: "aqua"}}
        thumbColor = {Enable ? "blue":"lightgray"}
        value = {Enable}
        onValueChange = {setEnable}
        style = {{marginTop: 15, marginBottom: 500}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  img: {
    height: 150,
    width: 150,
    marginTop: 15,
  }
});
