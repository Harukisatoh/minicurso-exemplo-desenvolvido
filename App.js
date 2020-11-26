import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Image, Text } from 'react-native';

export default function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://dummyapi.io/data/api/user', {
      headers: {
        'app-id': '5fbda228019ce38d6889dfa5'
      }
    }).then((response) => response.json()).then((json) => setUsers(json.data))
  }, [])

  function renderItem({ item }) {
    return(
      <View>
        <Text>{item.firstName}</Text>
        <Image source={{ uri: item.picture }} style={{ width: 150, height: 150 }} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList data={users} renderItem={renderItem} keyExtractor={(item) => (item.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
