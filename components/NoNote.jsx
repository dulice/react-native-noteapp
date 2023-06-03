import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLOR, SIZE } from '../styles/constants'

export default function NoNote() {
  return (
    <View>
    <View style={styles.container}>
        <Icon name='book-outline' size={50} color={COLOR.primary} />
      <Text >No notes here yet</Text>
    </View></View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: SIZE.xl,
        opacity: 0.5,
        height: Dimensions.get('window').height / 1.3
    }
})