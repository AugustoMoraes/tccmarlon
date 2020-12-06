import React, { useEffect,useState} from 'react'
import { View, Image, Text, ScrollView,TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import back from '../../assets/images/icons/back.png'

import api from '../../services/api'


const UserRegister2 = () => {

//    const  data = dataUser.item.params
    
    const [email,setEmial] = useState('')
    const [password, setPassword] = useState('')
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [result, setResult] = useState(null)

    const { navigate, goBack } = useNavigation()

    const handleCreateUser = () => {
        if(email == '' || password == ''){
            alert('Preencha todos os campos!')
            return
        }

        navigate('UserRegister3')
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
                    <Text style={[styles.title,{fontSize: 28,marginBottom:5}]}>0.2 Email e Senha?</Text>
                    <View>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'E-mail'
                            placeholderTextColor = '#000'
                            value = {email}
                            onChangeText = { (value) => {setEmial(value)}}
                        />
                    </View>
                    <View>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Senha'
                            placeholderTextColor = '#000'
                            value = {password}
                            secureTextEntry = {!visiblePassword}
                            onChangeText = { (value) => {setPassword(value)}}
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

export default UserRegister2