import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    scrollView: {
        backgroundColor: '#363636'
    },

    container: {
        flex: 1,
        backgroundColor: '#363636',
        justifyContent: 'center',
        padding: 40,
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    button: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'

    },

    buttonPrimary: {
        backgroundColor: '#F85404',
    },

    buttonSecondary: {
        backgroundColor: '#F85404',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40
    },
    viewInput:{
        backgroundColor: '#fff',
        marginVertical: 5,
        padding: 5,
        borderRadius: 7
    },
    input:{
        height: 45, 
        fontSize: 17
    },
    viewBotao:{
        backgroundColor: '#fff',
        marginTop: 5,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    botao:{
        fontSize: 20
    },
    txtBotao:{
        fontSize: 25
    },
    viewFooter:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 7
    },
    txtBotaoFooter:{
        color: '#fff',
        fontSize: 17
    }
})

export default styles