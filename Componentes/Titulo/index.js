import React from 'react'
import { Text, View } from 'react-native'

import estilos from './estilos'

export default function Titulo() {
  return (
    <View style={estilos.box}>
      <Text style={estilos.texto}>
        Signos e Datas
      </Text>
    </View>
  )
}
