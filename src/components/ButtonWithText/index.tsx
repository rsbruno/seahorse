import React, { ReactNode } from "react"
import {
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native"

type ButtonWithTextProps = TouchableOpacityProps & {
    children: ReactNode
}

export default function ButtonWithText(props: ButtonWithTextProps) {
    return (
        <TouchableOpacity
            activeOpacity={.6}
            {...props}
        >
            {props.children}
        </TouchableOpacity>
    );
}