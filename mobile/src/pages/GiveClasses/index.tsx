import React from 'react'
import { View, ImageBackground, Text, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


import styles from './styles'
import giveClassesBgImage from '../../assets/images/give-classes-background.png'


const GiveClasses = () => {

    const { goBack } = useNavigation()

    const handleNavigateBack = () => {
        goBack()
    };

    const handleLinkToMusic = () => {
        Linking.openURL(`http://eimusico.com/public`)
    }

    return (

        <View style={styles.container}>

            <ImageBackground
                source={giveClassesBgImage}
                style={styles.content}
                resizeMode='contain'
            >
                <Text style={styles.title}>Quer dar aulas de música?</Text>
                <Text style={styles.description}>Para começar você precisa se cadastrar em nossa plataforma web! Acesse: eimusico.com/public</Text>

            </ImageBackground>

            <RectButton 
                style={styles.okButton}
                onPress={handleLinkToMusic}
            >
                <Text style={styles.okButtonText} > Acesse</Text>
            </RectButton>
        </View>
    )
}


export default GiveClasses