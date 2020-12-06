import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    scrollView: {
        //flex: 1,
        backgroundColor: '#F0F0F7'
    },

    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
        //justifyContent: 'center',
        marginTop: 40,
        marginHorizontal:2
    },
    viewHeader:{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: '15%',
        marginHorizontal: 15
    },
    viewTitle:{
        marginHorizontal: 10
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#000',
        fontSize: 35,
        textAlign: "justify",
        marginHorizontal: 7,
        width: '75%'
    },
    description:{
        fontFamily: 'Poppins_400Regular',
        color: '#000',
        fontSize: 17,
        textAlign: "justify",
        marginHorizontal: 7,
        width: '75%'
    },

    viewInput:{
        marginTop: 40,
        marginHorizontal: 30
    },
    input:{
        height: 70,
        //width: '100%',
        backgroundColor: '#fff',
        marginBottom: 2,
        borderRadius: 7,
        justifyContent: 'center',
        padding: 25,
        fontSize: 20
    },
    viewButton:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#fff',
        height: 70,
        borderRadius: 7
    },
    txtButton:{
        fontSize: 25
    }
})

export default styles