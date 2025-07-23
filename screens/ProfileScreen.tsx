import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { getUserInfo, logoutUser } from '../services/authService'

const ProfileScreen = () => {

    // TODO: handle logout
    const handleLogout = () => {
        logoutUser();
    }

    const [currentUser, setCurrentUser] = useState(getUserInfo());

    return (
        <SafeAreaView>
            <View style={{padding:20}}>
                <Text>Profile</Text>

                {/* TODO: Show logged in user info */}
                <Text>{currentUser ?.email}</Text>
                <Text>{currentUser ?.displayName}</Text>

                <Button 
                    title="Sign Out"
                    color="green"
                    onPress={handleLogout} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen