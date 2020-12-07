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
        marginTop: 25,
    },
    viewHeader:{
        flexDirection: 'row',
        backgroundColor: '#F85404',
        justifyContent: "space-between",
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 15,
    },
    txtHeader:{
        fontSize: 17,
        color: '#D4C2FF'
    },

    viewTitle:{
        paddingVertical: 10,
        backgroundColor: '#F85404'
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#000',
        fontSize: 35,
        textAlign: "justify",
        paddingHorizontal: 10,
        //width: '75%'
    },
    description:{
        fontFamily: 'Poppins_400Regular',
        color: '#000',
        fontSize: 17,
        textAlign: "justify",
        marginHorizontal: 7,
        width: '75%'
    },
    viewForm:{
        top: -27,
        backgroundColor: '#fff',
        marginHorizontal: 30,
        borderRadius: 10, 
        justifyContent: 'center',
    },
    viewImageProff:{
        height: 100,
        width: 100,
        backgroundColor: '#000',
        borderRadius: 100,
        marginRight: 20
    },
    newHour:{
        fontSize: 17,
        color: '#F85404'
    },
    txtNameProff:{
        fontSize: 20,
        color: '#000',
        textAlign: 'justify'
    },
    txtClassProff:{
        fontSize: 16,
        color: '#9C98A6',
        textAlign: 'justify'
    },
    descriptionInput:{
        fontSize: 16,
        color: '#9C98A6',
        marginVertical: 10,
    },
    dataProff:{
        marginHorizontal: 20
    },
    input:{
        height: 70,
        backgroundColor: '#FAFAFC',
        marginBottom: 2,
        borderRadius: 7,
        justifyContent: 'center',
        padding: 10,
        fontSize: 22
    },
    viewButton:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        backgroundColor: '#363636',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 6
    },
    txtButton:{
        fontSize: 25,
        color: '#FFFFFF'
    }
})

export default styles