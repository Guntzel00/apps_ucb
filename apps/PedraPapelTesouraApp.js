import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	TouchableOpacity,
} from 'react-native';

// Imagens das opções
const options = {
	pedra: {
		uri: 'https://thumb.silhouette-ac.com/t/69/69ffced83032519ca680dc3058b9ca26_w.jpeg',
	},
	papel: {
		uri: 'https://thumb.silhouette-ac.com/t/ac/ace4c56ba1582e3a3c6ed4a3b20ec7a9_w.jpeg',
	},
	tesoura: {
		uri: 'https://thumb.silhouette-ac.com/t/a7/a7c3020b4cfb4fd154c4fcfd62702df2_w.jpeg',
	},
};

// Função que gera a jogada aleatória do app
const gerarJogadaApp = () => {
	const jogadas = ['pedra', 'papel', 'tesoura'];
	return jogadas[Math.floor(Math.random() * 3)];
};

// Função que determina o resultado do jogo
const determinarVencedor = (usuario, app) => {
	if (usuario === app) return 'Empate!';
	if (
		(usuario === 'pedra' && app === 'tesoura') ||
		(usuario === 'tesoura' && app === 'papel') ||
		(usuario === 'papel' && app === 'pedra')
	) {
		return 'Você ganhou!';
	}
	return 'Você perdeu!';
};

export default function PedraPapelTesouraApp() {
	const [jogadaUsuario, setJogadaUsuario] = useState('');
	const [jogadaApp, setJogadaApp] = useState('');
	const [resultado, setResultado] = useState('');

	const jogar = (escolhaUsuario) => {
		const jogadaApp = gerarJogadaApp();
		const resultado = determinarVencedor(escolhaUsuario, jogadaApp);
		setJogadaUsuario(escolhaUsuario);
		setJogadaApp(jogadaApp);
		setResultado(resultado);
	};

	const resetarJogo = () => {
		setJogadaUsuario('');
		setJogadaApp('');
		setResultado('');
	};

	// Definindo a cor do texto com base no resultado
	const getResultColor = () => {
		if (resultado === 'Você ganhou!') {
			return 'green';
		} else if (resultado === 'Você perdeu!') {
			return 'red';
		}
		return 'black'; // Empate ou resultado inicial
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Pedra, Papel e Tesoura</Text>

			<View style={styles.optionsContainer}>
				<TouchableOpacity onPress={() => jogar('pedra')}>
					<Image source={options.pedra} style={styles.optionImage} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => jogar('papel')}>
					<Image source={options.papel} style={styles.optionImage} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => jogar('tesoura')}>
					<Image source={options.tesoura} style={styles.optionImage} />
				</TouchableOpacity>
			</View>

			{jogadaUsuario ? (
				<View style={styles.resultContainer}>
					<Text>Você escolheu: {jogadaUsuario}</Text>
					<Text>O App escolheu: {jogadaApp}</Text>
					<Text style={[styles.result, { color: getResultColor() }]}>
						{resultado}
					</Text>
				</View>
			) : null}

			<Button title='Jogar Novamente' onPress={resetarJogo} />
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
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	optionsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 20,
	},
	optionImage: {
		width: 100,
		height: 100,
		marginHorizontal: 10,
	},
	resultContainer: {
		marginVertical: 20,
	},
	result: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 10,
	},
});
