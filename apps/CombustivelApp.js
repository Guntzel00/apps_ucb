import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function CombustivelApp() {
	const [alcool, setAlcool] = useState('');
	const [gasolina, setGasolina] = useState('');
	const [resultado, setResultado] = useState('');

	const calcularCombustivel = () => {
		const relacao = parseFloat(alcool) / parseFloat(gasolina);
		if (relacao < 0.7) {
			setResultado('Abasteça com Álcool');
		} else {
			setResultado('Abasteça com Gasolina');
		}
	};

	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: 'https://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg',
				}}
				style={styles.image}
			/>
			<TextInput
				style={styles.input}
				placeholder='(R$) Preço do álcool'
				keyboardType='numeric'
				value={alcool}
				onChangeText={setAlcool}
			/>
			<TextInput
				style={styles.input}
				placeholder='(R$) Preço da gasolina'
				keyboardType='numeric'
				value={gasolina}
				onChangeText={setGasolina}
			/>
			<Button title='Calcular' onPress={calcularCombustivel} />
			{resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		width: 200,
		textAlign: 'center',
	},
	image: {
		width: 300,
		height: 150,
		marginBottom: 20,
	},
	resultado: {
		marginTop: 20,
		fontSize: 18,
	},
});
