import React,{useState} from 'react'
import { View, ImageBackground, Text,TextInput} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import Logo from '../../assets/images/logo.png'

const GiveClasses = () => {

    const { navigate } = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPasswor] = useState('')
    const [visiblePassword, setVisiblePasswor] = useState(false)
    const handleSubmit = () => {
        navigate('ProfileProff') //naver para tela de perfil
    }
    const handleRegisterUser = () => {
        navigate('UserRegister')
    }

    return (

        <View style={styles.container}>
            <View style={styles.viewHeader}>
            <ImageBackground
                    source={giveClassesBgImage}
                    style={styles.content}
                    resizeMode='contain'
            >
                <View style={{justifyContent:'center',width: '40%'}}>
                    <Text style={styles.title}>
                        Proff
                    </Text>
                    <Text style={styles.description}>Sua plataforna de Estudos online</Text>
                </View>
            </ImageBackground>
            </View>
            <View style={styles.viewTipe}>
                <Text style={styles.txtLogin}>
                    Fazer Login
                </Text>
                <RectButton onPress={handleRegisterUser}>
                    <Text style={styles.txtCadastro}>Crie uma conta</Text>    
                </RectButton>
            </View>
            <View style={styles.viewFooter}>
                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder = 'E-mail'
                    onChangeText={(value) => {setEmail(value)}}
                />
                    <TextInput
                        style={styles.input}
                        value={password}
                        secureTextEntry = {!visiblePassword}
                        placeholder= 'Senha' 
                        onChangeText={(value) => {setPasswor(value)}}
                    />
                
                <View style={styles.viewTipe}>
                <Text style={{fontSize:15}}>Lembre-me</Text>
                <RectButton onPress={handleSubmit}>
                    <Text style={{fontSize:15}}>Esqueci minha senha</Text>
                </RectButton>                    
                </View>
                <RectButton
                    style={styles.okButton}
                    onPress={handleSubmit}
                >
                    <Text style={styles.okButtonText}>Entrar</Text>
                </RectButton>
            </View>
        </View>
    )
}

export default GiveClasses