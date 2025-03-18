import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: '#F0F8FF', // Fundo azul claro sutil
    padding: 50,
    marginTop: 280,
    borderRadius: 20,
    marginHorizontal: 17,
     shadowColor: 'black', // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Sombra com deslocamento (eixo X, eixo Y)
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 5, // Raio de suavização da sombra
    elevation: 8,
  },

  card: {
    width: 320,
    height: 260,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1E90FF', // Azul forte
  },

  texto: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },

  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 15,
  },
});
