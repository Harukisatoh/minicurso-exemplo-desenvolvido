import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

function Contador(props) {

    const [value, setValue] = useState(0)

    function increment() {
        setValue((value) => (value + 1))
    }
    
    function decrement() {
        setValue((value) => (value - 1))
    }

    return (
        <View>
            <Text>{props.title}</Text>
            <Text>{value}</Text>
            <Button title="+" onPress={increment} />
            <Button title="-" onPress={decrement} />
        </View>
    )
}

export default Contador