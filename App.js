import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        source={require('./imgs/logo.png')}
        />
        <TouchableOpacity onPress={frasesAleatorias} style={styles.botao}>
          <Text style={styles.text}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
    
  },
  botao: {
    backgroundColor: '#538530',
    padding: 20,
    borderRadius: 10,
    marginTop:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
});

const frasesAleatorias = () =>{

  var numeroAl = Math.random();
  numeroAl = Math.floor(numeroAl * 6);

  var frases = Array();
  frases[0] ='Bom dia Meu Jovem!';
  frases[1] ='Você é especial meu consagrado!';
  frases[2] ='É hora do show!';
  frases[3] ='GLÓRIA A DEUXX';
  frases[4] ='Não desiste de viver, a vida tem jeito';
  frases[5] ='Seja otimista, as coisas vão melhorar';
  frases[6] ='Fé no Pai que o inimigo cai';
   

  Alert.alert(frases[numeroAl]);

}