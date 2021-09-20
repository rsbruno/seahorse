import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {SignIn} from "../screens/SignIn";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    cardStyle: {
                        backgroundColor: "transparent",
                    },
                    headerShown: false
                }}
            >
                <Screen name="Home" component={Home} />
                <Screen name="SignIn" component={SignIn} />
            </Navigator>
        </NavigationContainer>
    );
}