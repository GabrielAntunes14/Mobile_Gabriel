import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
                  source={require('@/assets/images/clima_sobre.png')}
                  style={styles.reactSobre}
                />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sobre meu tabalho: Clima</ThemedText>
      </ThemedView>
      <ThemedText></ThemedText>
      <Collapsible title="Objetivos:">
        <ThemedText>
Permitir que usuários consultem a previsão do tempo em tempo real.
Oferecer uma experiência rápida e fácil de navegar.
Ajudar no planejamento do dia a dia, viagens ou atividades externas, baseado no clima atual.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Funcionalidades:">
        <ThemedText>
        Seleção de cidades:
Uma lista horizontal de cidades disponíveis é exibida no topo.
O usuário pode deslizar lateralmente e escolher qual cidade deseja consultar.
Busca de dados de clima:
Ao selecionar uma cidade, o aplicativo faz uma requisição para a API OpenWeatherMap, buscando:
Temperatura atual,
Descrição do clima (ex: nublado, ensolarado),
Temperatura máxima e mínima,
Ícone representando o clima,
Indicador de carregamento:
Enquanto os dados climáticos são carregados, um ActivityIndicator (ícone de carregando) é exibido para informar o usuário.
Exibição de informações: Após o carregamento, os dados aparecem de forma organizada:
Nome da cidade,
Temperatura em graus Celsius,
Ícone do clima (exibido via imagem),
Descrição textual do clima,
Temperatura máxima e mínima do dia,
Design responsivo:
Todo o layout foi pensado para funcionar bem em diferentes tamanhos de tela.
    
        </ThemedText>
    
      </Collapsible>
      
      <Collapsible title="Observações">
        <ThemedText>
O projeto já está estruturado para receber futuras melhorias, como:
Adicionar previsão para os próximos dias,
personalizar mais opções de cidades,
melhorar a interface para torná-la ainda mais intuitiva e
adicionar modos de visualização com gráficos de temperatura.
        </ThemedText>
      
      </Collapsible>
      
    
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactSobre: {
    height: 320,
    width: 400 ,
    bottom: 0,
    left: 49,
    position: 'absolute',
    top:-45
  },
});
