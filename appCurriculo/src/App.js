import React from 'react';
import {StyleSheet, View, Image, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';


const App = () => {  
  return (
    <>
    
      <View style = {style.page}>
        <View style = {style.container_cabecalho}>
          <Image source = {foto} style = {style.foto} />
          <Text style = {style.nome}>JÚNIOR MOURA</Text>
          <Text style = {style.funcao}>Desenvolvedor Jr.</Text>
          <View style = {style.redes_sociais}>
          <Icon name ="github" size={30}/>
          <Icon name ="linkedin" size={30}/>
          </View>                    
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome:{
    fontSize: 32,
    fontWeight: 'bold'
  },
  funcao:{
    color: '#FF0000',
    marginBottom: 10
  },
  redes_sociais:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  }
})


export default App;
