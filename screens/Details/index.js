import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';

export default function Details() {
  return (
    <View style={estilo.container}>
    
      <Text style={estilo.texto}> ESSA É A TELA DE DETALHES</Text>

      
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  },
  texto: {
    color: 'white',

  }
});