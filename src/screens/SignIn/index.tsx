import React from "react"
import { useEffect } from "react";
import { View, Text } from "react-native"
import { useAuth } from "../../contexts/auth";

export function SignIn(){
    const { user, setUser } = useAuth();

    useEffect(() => {
        if (!user.username)
            setUser({ id: "1", username: "Bruno" })
    })

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Rajdhani_700Bold', fontSize: 40 }}>
                {user.username ? user.username : "não informado"}
            </Text>
        </View>
    )
}