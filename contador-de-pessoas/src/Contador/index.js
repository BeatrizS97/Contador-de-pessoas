import react, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

function Contador(props) {
  const [pessoas, setPessoas] = useState(0); // Usando o useState como um contador

  // Estou usando o useEffect para alertar semore que o número de pessoas mudar
  useEffect(() => {
    if(pessoas > 0) {
      alert('Número de pessoas atualizado:');
    }
  }, [pessoas]);

  function adicionarPessoa(){
    setPessoas(pessoas + 1);
  }

  function removerPessoa(){
    if (pessoas > 0){
      setPessoas(pessoas - 1);
    }
  }

  return  (
    <View style={styles.container}>
    <Text style={styles.titulo}>{props.nomeLoja}</Text>
    <Text style={styles.texto}> 👥 Pessoas na loja: {pessoas}</Text>
  
   <View style={styles.botoes}>
   <Button title="➕ Adicionar" onPress={adicionarPessoa}/>
   <Button title="➖ Remover" onPress={removerPessoa}/>
 </View>
</View>
);
}

export default Contador;