import React from 'react'
import { Text, View } from 'react-native'

import estilos from './estilos'

export default function ListaSignos(props) {
  return (
    <View style={estilos.boxSignos}>
      <Text style={estilos.nomeSignos}>{props.signo}</Text>

      <Text>
        Nascido entre: {props.dataInicio} - {props.dataFim}
      </Text>
    </View>
  )
}
