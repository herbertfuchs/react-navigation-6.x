import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Info ({ navigation }) {
    return(
    <View>
        <Text>Info Screen</Text>
        <Button 
            title="Voltar para Details"
            onPress={() => navigation.navigate('Details')}
        />
    </View>
    );
}