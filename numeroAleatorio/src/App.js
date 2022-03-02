import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(0)

    function geraNumero(){

        const novo_numero = Math.floor(Math.random() * 1000);

        setNumero(novo_numero)
    }

    return(
        <>

            <Text style = {style.titulo}>Gerador de Números Aleatórios</Text>
            <SafeAreaView style = {style.container}>
                <Text style = {style.numero}>{numero}</Text>
                <TouchableOpacity onPress={geraNumero}>
                    <Text style = {style.botao}>Gerar Número</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 38,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'comics'
    },
    botao: {
        backgroundColor: 'blue',
        width: '100%',
        color: '#fff',
        padding: 8,
        borderRadius: 50,
    },
    titulo: {
        fontSize: 25,
        fontFamily: 'comics',
        color: '#000'
    }
});

export default App 
