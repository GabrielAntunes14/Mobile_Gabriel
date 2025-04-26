import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/Oi - inicio.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Opa!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Meu nome é Gabriel e atualmente estou cursando o 3° ano do ensino médio técnico.
           em desenvolvimento de sistemas</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Pretendo futuramente fazer uma faculdade de ADS e também de Engenharia de Software para poder
          melhorar meu curriculo, mas também sempre estudar fora e procurar saber mais sobre tudo que envolve desenvolvimento de sistemas.
        </ThemedText>
        <ThemedText>
        </ThemedText>
     
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Também penso muito em futuramente trabalhar no auxílio em criação de jogos, não pensando apenas
          como algo para ter na minha carreira, mas também como um sonho que algum dia pretendo realizar
        </ThemedText>

        <Image
          source={require('@/assets/images/castlevania.gif')}
          style={styles.reactCastle}
        />

        <ThemedText>
        
      {' '}
      
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );

}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 600,
    width: 400 ,
    bottom: 0,
    left: 0,
    position: 'absolute',
    top:-150,
  },
  reactCastle: {
    height: 300, 
    width: 300,
    alignSelf: 'center',
    marginTop:20,
    marginBottom:50,
  },
  
});
