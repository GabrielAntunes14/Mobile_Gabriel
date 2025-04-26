import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';

export default function Clima() {
  const [cidade, setCidade] = useState('São Paulo');
  const [dadosClima, setDadosClima] = useState<any>(null);
  const [carregando, setCarregando] = useState(false);

  const cidadesDisponiveis = [
    { nomeExibicao: 'São Paulo', nomeBusca: 'São Paulo' },
    { nomeExibicao: 'Rio de Janeiro', nomeBusca: 'Rio de Janeiro' },
    { nomeExibicao: 'Belo Horizonte', nomeBusca: 'Belo Horizonte' },
    { nomeExibicao: 'Curitiba', nomeBusca: 'Curitiba' },
    { nomeExibicao: 'Salvador', nomeBusca: 'Salvador,BR' },
    { nomeExibicao: 'Porto Alegre', nomeBusca: 'Porto Alegre' },
  ];

  const buscarClima = async (cidadeEscolhida: string) => {
    try {
      setCarregando(true);
      const API_KEY = '853a280a78e7b911ed49c03b25a9567a'; 
      const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidadeEscolhida}&appid=${API_KEY}&units=metric&lang=pt_br`);
      const dados = await resposta.json();
      setDadosClima(dados);
      setCidade(cidadeEscolhida);
    } catch (erro) {
      console.error('Erro ao buscar clima:', erro);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarClima(cidade);
  }, []);

  return (
    <View style={estilos.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={estilos.lista}
        contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}
      >
        {cidadesDisponiveis.map((cidadeItem, index) => (
          <TouchableOpacity 
            key={index} 
            style={estilos.botaodacidade} 
            onPress={() => buscarClima(cidadeItem.nomeBusca)}
          >
            <Text style={estilos.textoDoBotaozao}>{cidadeItem.nomeExibicao}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {carregando ? (
        <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 50 }} />
      ) : dadosClima && dadosClima.weather ? (
        <View style={estilos.resultado}>
          <Text style={estilos.cidade}>{dadosClima.name}</Text>
          <Text style={estilos.temperatura}>{Math.round(dadosClima.main.temp)}°</Text>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${dadosClima.weather[0].icon}@4x.png` }}
            style={estilos.imagemclima}
          />
          <Text style={estilos.descricao}>{dadosClima.weather[0].description}</Text>
          <Text style={estilos.maximo_eo_minimo_temperatura}>
            Máx.: {Math.round(dadosClima.main.temp_max)}°  Mín.: {Math.round(dadosClima.main.temp_min)}°
          </Text>
        </View>
      ) : (
        <Text style={estilos.texto}>Nenhum dado disponível.</Text>
      )}
    </View>
    
  );
}

const { width } = Dimensions.get('window');

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2746',
    paddingTop: 60,
    alignItems: 'center',
  },
  lista: {
    marginBottom: 30,
    maxHeight: 60,
  },
  botaodacidade: {
    backgroundColor: '#394867',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoDoBotaozao: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  resultado: {
    alignItems: 'center',
    marginTop: 20,
  },
  cidade: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperatura: {
    color: '#fff',
    fontSize: 80,
    fontWeight: '200',
    marginBottom: 10,
  },
  imagemclima: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  descricao: {
    color: '#cfcfcf',
    fontSize: 20,
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  maximo_eo_minimo_temperatura: {
    color: '#cfcfcf',
    fontSize: 16,
  },
  texto: {
    color: '#fff',
    fontSize: 18,
  },
});
