import {AppRegistry} from 'react-native';
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Alert } from "react-native";

const Cuadrica = () => {

  const [numA, setA] = React.useState(0);
  const [numB, setB] = React.useState(0);
  const [numC, setC] = React.useState(0);

  function calculate(){
    if(isNaN(numA) || isNaN(numB) || isNaN(numC)){
        Alert.alert("Error solo se permiten numeros");
        return;
    }
    let num1 = (numB*-1) + Math.sqrt( (numB*numB) - (4*numA*numC) );
    let num2 = (numB*-1) - Math.sqrt( (numB*numB) - (4*numA*numC) );

    if(isNaN(num1)){
        Alert.alert("Respues no existe en los numeros reales");
        return;
    }

    let den = 2*numA;
    let r1 = num1/den;
    let r2 = num2/den;

    Alert.alert("Los valores de X son: "+r1+" y "+r2);    
  }


  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setA}
        placeholder="a"
        keyboardType="numeric"

      />
      <TextInput
        style={styles.input}
        onChangeText={setB}        
        placeholder="b"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setC}        
        placeholder="c"
        keyboardType="numeric"
      />
     
      
      <Button
        onPress={calculate}
        title="Calcular"
        color="#ff0022"        
    />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

AppRegistry.registerComponent("dps_t1_app1", () => Cuadrica);