import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Block from "./Block";
import { theme } from "../utils";
import { BlockProps, CardProps } from "../utils/types";

const Card: React.FC<CardProps | BlockProps> = ({ color, style, children, ...props }) => {
    const cardStyles = StyleSheet.flatten([styles.card, style]);

    return (
        <Block color={color || theme.colors.white} style={cardStyles} {...props}>
            {children}
        </Block>
    );
}

export default Card;

export const styles = StyleSheet.create({
    card: {
        borderRadius: theme.sizes.radius,
        padding: theme.sizes.base + 4,
        marginBottom: theme.sizes.base
    }
});