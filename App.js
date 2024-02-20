import { Text, View, StyleSheet, Image, Switch } from 'react-native';
import {useState} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [Enable, setEnable] = useState('');

  return (
    <View style = {{backgroundColor: Enable ? "yellow":"black"}}>
      <View style = {styles.center}>
        <Text style = {{marginTop: 300, fontSize: 25, color: Enable ? "black":"white"}}>AMC MP1</Text>
        <Image source = {Enable ? require('./assets/Light.jpg'):require('./assets/Bulb.jpg')} style={styles.img}/>
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
