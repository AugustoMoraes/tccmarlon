import React, {useState} from 'react'
import { View, Image, Text, ScrollView,TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import  {Picker} from '@react-native-community/picker'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import back from '../../assets/images/icons/back.png'
import logo from '../../assets/images/logo.png'

import api from '../../services/api'


const ProfileProff = () => {

//    const  data = dataUser.item.params
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp,setWhatsapp] = useState('(91) 999999999')
    const [biografia, setBiografia] = useState('Currículo do professor')
    const [course, setCourse] = useState('')
    const [hourClass,setHourClass] = useState('')
    const [dayWeek, setDayWeek] = useState('Segunda')
    const [startClass, setStartClass] = useState('')
    const [endClass, setEndClass] = useState('')

    const { navigate, goBack } = useNavigation()

    const handleCreateUser = () => {
        alert('Cadastro Realizado com sucesso!')
        navigate('PageSuccess')
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
                    <Text style={styles.txtHeader}>
                        Dar Aulas
                    </Text>
                    <Image 
                            source={logo}
                    />
                </View>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>
                        Que incrível que você quer dar aulas.
                    </Text>
                    <Text style={styles.description}>
                        O primeiro passo é preencher esse formulário de inscrição.
                    </Text>
                </View>
                <View style={styles.viewForm}>
                    <View>
                    <Text style={[styles.title,{fontSize: 19,marginVertical:15,color: '#32264D'}]}>
                        Seus dados
                    </Text>
                     <View style={{flexDirection: 'row',marginHorizontal: 20, alignItems: 'center'}}>
                        <View style={styles.viewImageProff}>
                            <Image 
                                source={logo}
                                style={{height: '100%', width: '100%'}}
                                resizeMode = 'contain'
                            />
                        </View>
                        <View>
                            <Text style={styles.txtNameProff}>
                                Nome do Professor
                            </Text>
                            <Text style={styles.txtClassProff}>
                                Disciplina
                            </Text>
                        </View>
                    </View>
                        <View style={styles.dataProff}>
                        <Text style={styles.descriptionInput}> 
                            Nome
                        </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Nome'
                            placeholderTextColor = '#6A6180'
                            value = {name}
                            onChangeText = { (value) => {setName(value)}}
                        />
                        <Text style={styles.descriptionInput}> 
                            Sobrenome
                        </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Sobrenome'
                            placeholderTextColor = '#6A6180'
                            value = {lastName}
                            onChangeText = { (value) => {setLastName(value)}}
                        />
                        <Text style={styles.descriptionInput}> 
                            E-mail
                        </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'email@gmail.com'
                            placeholderTextColor = '#6A6180'
                            value = {email}
                            onChangeText = { (value) => {setEmail(value)}}
                        />
                        <Text style={styles.descriptionInput}> 
                            Whatsapp
                        </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '(91) 999999900'
                            placeholderTextColor = '#6A6180'
                            value = {whatsapp}
                            onChangeText = { (value) => {setWhatsapp(value)}}
                        />
                        <Text style={styles.descriptionInput}>
                            Biografia
                        </Text>
                        <TextInput
                            style = {[styles.input,{height: 200,textAlign: 'justify'}]}
                            placeholder = 'Biografia'
                            placeholderTextColor = '#6A6180'
                            value = {biografia}
                            //secureTextEntry = {!visiblePassword}
                            onChangeText = { (value) => {setBiografia(value)}}
                        />
                    </View>
                    </View>
                    <View style={[styles.viewForm,{top: 0}]}>
                        <Text style={[styles.title,{fontSize: 19,marginVertical:15,color: '#32264D'}]}>
                            Sobre a aula
                        </Text>
                        <Text style={styles.descriptionInput}>
                            Curso
                        </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Diga seu Curso'
                            placeholderTextColor = '#6A6180'
                            value = {course}
                            //secureTextEntry = {!visiblePassword}
                            onChangeText = { (value) => {setCourse(value)}}
                        />
                        <Text style={styles.descriptionInput}>
                            Custo da hora por aula
                        </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'R$ 20,00'
                            placeholderTextColor = '#6A6180'
                            value = {hourClass}
                            keyboardType = "numeric"
                            onChangeText = { (value) => {setHourClass(value)}}
                        />
                    </View>
                    <View style={[styles.viewForm,{top: 0}]}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                        <Text style={[styles.title,{fontSize: 19,marginVertical:15,color: '#32264D'}]}>
                            Horários disponíveis
                        </Text>
                        <RectButton>
                            <Text style={styles.newHour}>+ Novo</Text>
                        </RectButton>
                        </View>
                        <Text style={styles.descriptionInput}>
                            Dias da Semana
                        </Text>
                        <Picker
                            selectedValue={dayWeek}
                            style={{height: 50, width: '100%'}}
                            onValueChange={(itemValue, itemIndex) => setDayWeek(itemValue)}
                            mode= "dropdown" 
                        >
                            <Picker.Item label='Segunda-Feira' value='Segunda-Feira'/>
                            <Picker.Item label='Terça-Feira' value='Terça-Feira'/>
                            <Picker.Item label='Quarta-Feira' value='Quarta-Feira'/>
                            <Picker.Item label='Quinta-Feira' value='Quinta-Feira'/>
                            <Picker.Item label='Sexta-Feira' value='Sexta-Feira'/>
                            <Picker.Item label='Sábado' value='Sábado'/>
                            <Picker.Item label='Domingo' value='Domingo'/>
                        </Picker>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View>
                                <Text style={styles.descriptionInput}>
                                    Das
                                </Text>
                                <TextInput
                                    style = {styles.input}
                                    placeholder = '8:00 H'
                                    placeholderTextColor = '#6A6180'
                                    value = {startClass}
                                    //secureTextEntry = {!visiblePassword}
                                    onChangeText = { (value) => {setStartClass(value)}}
                                />
                            </View>
                            <View>
                                <Text style={styles.descriptionInput}>
                                    Até
                                </Text>
                                <TextInput
                                    style = {styles.input}
                                    placeholder = '16:00 H'
                                    placeholderTextColor = '#6A6180'
                                    value = {endClass}
                                    //secureTextEntry = {!visiblePassword}
                                    onChangeText = { (value) => {setEndClass(value)}}
                                />
                            </View>
                        </View>
                    <View style={styles.viewButton}>
                        <RectButton
                            onPress = {handleCreateUser}
                        >
                            <Text style={styles.txtButton}>
                                Salvar alterações
                            </Text>
                        </RectButton>
                    </View>
                    </View>
                    </View>
                
            </View>
        </ScrollView>
    )
}

export default ProfileProff