import React from 'react'
import {View,ImageBackground,Image,Text} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import background from '../../assets/images/give-classes-background.png'
//import successs from '../../assets/images/success.png'
import styles from './styles'

const PageSuccess = () => {
    return (
        <ImageBackground source={background} style={styles.background}>
            <View style={{marginHorizontal: 30}}>
            <RectButton style={styles.button}>
                <Text style={styles.txtButton}>
                    Finalizar
                </Text>
            </RectButton>
            </View>
        </ImageBackground>
    )
}

export default PageSuccess