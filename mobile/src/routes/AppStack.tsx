import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import UserRegister from '../pages/UserRegister'
import UserRegister2 from '../pages/UserRegister2'
import UserRegister3 from '../pages/UserRegister3'
import ProfileProff from '../pages/ProfileProff'
import PageSuccess from '../pages/PageSuccess'
import StudyTabs from './StudyTabs'

const { Navigator, Screen } = createStackNavigator()

const AppStack = () => {

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='Landing' component={Landing} />
                <Screen name='GiveClasses' component={GiveClasses} />
                <Screen name='Study' component={StudyTabs} />
                <Screen name= 'UserRegister' component={UserRegister}/>
                <Screen name= 'UserRegister2' component={UserRegister2}/>
                <Screen name= 'UserRegister3' component={UserRegister3}/>
                <Screen name= 'ProfileProff' component={ProfileProff}/>
                <Screen name= 'PageSuccess' component={PageSuccess}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack