import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';

// Importando os aplicativos
import IMCApp from './apps/IMCApp';
import CombustivelApp from './apps/CombustivelApp';
import PedraPapelTesouraApp from './apps/PedraPapelTesouraApp';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Menu Principal</Text>
			<View style={{ margin: 10 }} />
			<Button title='Calcular IMC' onPress={() => navigation.navigate('IMC')} />
			<View style={{ margin: 10 }} />
			<Button
				title='Comparar Combustível'
				onPress={() => navigation.navigate('Combustivel')}
			/>
			<View style={{ margin: 10 }} />
			<Button
				title='Jogar Pedra, Papel e Tesoura'
				onPress={() => navigation.navigate('PedraPapelTesoura')}
			/>
		</View>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='IMC' component={IMCApp} />
				<Stack.Screen name='Combustivel' component={CombustivelApp} />
				<Stack.Screen
					name='PedraPapelTesoura'
					component={PedraPapelTesouraApp}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
