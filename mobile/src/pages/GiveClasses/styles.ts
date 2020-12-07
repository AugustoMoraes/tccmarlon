import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //backgroundColor: '#F85404',
        backgroundColor: '#ddd',
        //justifyContent: 'center',
        //padding: 40,
    },
    viewHeader:{
        height: '45%',
        width: '100%',
        backgroundColor: '#F85404',
        
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#E5E5E5',
        fontSize: 70,
        //lineHeight: 37,
        maxWidth: 180
    },

    description: {
        marginTop: 5,
        color: '#D4C2FF',
        fontSize: 16,
        //lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240
    },
    viewTipe:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10
    },
    txtLogin:{
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold'
    },
    txtCadastro:{
        fontSize: 17,
        color: '#F85404'
    },
    viewFooter:{
        justifyContent: 'center',
        marginHorizontal: 40,
        marginTop: 10
    },
    input:{
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 2,
        height: 60,
        borderRadius: 7,
        fontSize: 20
    },
    okButton: {
        marginVertical: 25,
        backgroundColor: '#363636',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    okButtonText: {
        color: '#FFF',
        fontSize: 25,
        fontFamily: 'Archivo_700Bold'
    }
})

export default styles