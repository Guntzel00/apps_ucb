import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function IMCApp() {
	const [peso, setPeso] = useState('');
	const [altura, setAltura] = useState('');
	const [resultado, setResultado] = useState('');

	const calcularIMC = () => {
		const imc = (
			parseFloat(peso) /
			(parseFloat(altura) * parseFloat(altura))
		).toFixed(2);
		let classificacao = '';

		if (imc < 18.5) classificacao = 'Abaixo do peso';
		else if (imc < 24.9) classificacao = 'Peso normal';
		else if (imc < 29.9) classificacao = 'Sobrepeso';
		else if (imc < 39.9) classificacao = 'Obesidade';
		else classificacao = 'Obesidade grave';

		setResultado(`IMC: ${imc} (${classificacao})`);
	};

	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: 'https://cdn-icons-png.flaticon.com/512/1668/1668541.png',
				}}
				style={styles.image}
			/>
			<TextInput
				style={styles.input}
				placeholder='Peso (kg)'
				keyboardType='numeric'
				value={peso}
				onChangeText={setPeso}
			/>
			<TextInput
				style={styles.input}
				placeholder='Altura (m)'
				keyboardType='numeric'
				value={altura}
				onChangeText={setAltura}
			/>
			<Button title='Calcular IMC' onPress={calcularIMC} />
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
		width: 100,
		height: 100,
		marginBottom: 20,
	},
	resultado: {
		marginTop: 20,
		fontSize: 18,
	},
});
