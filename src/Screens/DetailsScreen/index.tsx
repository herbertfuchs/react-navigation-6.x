import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>Navigation.PUSH</Text>
            <Button 
                title="Ir para a Details novamente..."
                onPress={() => {navigation.push('Details')}}
            />
            <Text>Navigation.navigate para a HOME</Text>
            <Button 
                title="Ir para a Home"
                onPress={() => {navigation.navigate('Home')}}
            />
            <Text>Navigation.popToTop, retorna todas as telas.</Text>
            <Button 
                title="Retornar todas as telas"
                onPress={() => {navigation.popToTop()}}
            />
            <Text>Navigation.goBack()</Text>
            <Button 
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
            <Text>Ir para InfoScreen</Text>
            <Button 
                title="Ir para InfoScreen"
                onPress={() => {navigation.navigate('Info')}}
            />
        </View>
    );
}