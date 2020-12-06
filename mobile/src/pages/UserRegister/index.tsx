import React, { useState} from 'react'
import { View, Image, Text, ScrollView,TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import back from '../../assets/images/icons/back.png'

import api from '../../services/api'


const UserRegister = () => {

    const [name,setName] = useState('')
    const [lestName, setLestName] = useState('')

    const [result, setResult] = useState(null)

    const { navigate,goBack } = useNavigation()

    
    const handleCreateUser = () => {
        if(name == '' || lestName == ''){
            alert('Preencha todos os campos!')
            return
        }
        const dataUser = {name,lestName}
        //console.log(dataUser)
        navigate('UserRegister2')
    }
    
    return (

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <View style={styles.viewHeader}>
                    <RectButton onPress={goBack}>
                        <Image 
                            source={back}
                        />
                    </RectButton>
                    <Text>Dois Pontos</Text>
                </View>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Crie sua conta gratuíta</Text>
                    <Text style={styles.description}>Basta Preecher esses dados e você estará conosco.</Text>
                </View>
                <View style={styles.viewInput}>
                    <Text style={[styles.title,{fontSize: 30,marginBottom:5}]}>0.1 Quem é você?</Text>
                    <View>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Nome'
                            placeholderTextColor = '#000'
                            value = {name}
                            onChangeText = { (value) => {setName(value)}}
                        />
                    </View>
                    <View>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Sobrenome'
                            placeholderTextColor = '#000'
                            value = {lestName}
                            onChangeText = { (value) => {setLestName(value)}}
                        />
                    </View>
                    <RectButton
                        onPress = {handleCreateUser}
                        style={styles.viewButton}
                    >
                        <Text style={styles.txtButton}>
                            Próximo
                        </Text>
                    </RectButton>
                </View>
            </View>

        </ScrollView>
    )
}

export default UserRegister