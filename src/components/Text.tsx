import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import { theme } from "../constants";


type TypographyProps = {
  h1?: Boolean
  h2?: Boolean
  h3?: Boolean
  title?: Boolean
  body?: Boolean
  caption?: Boolean
  small?: Boolean
  size?: Number
  transform?: String
  align?: String
  regular?: Boolean
  bold?: Boolean
  semibold?: Boolean
  medium?: Boolean
  weight?: Number | String
  light?: Boolean
  center?: Boolean
  right?: Boolean
  spacing?: String
  height?: Number
  color?: String
  accent?: Boolean
  primary?: Boolean
  secondary?: Boolean
  tertiary?: Boolean
  black?: Boolean
  white?: Boolean
  gray?: Boolean
  gray2?: Boolean
  style?: React.CSSProperties
}
  

const Typography: React.FC<TypographyProps>  = ({
  h1,
  h2,
  h3,
  title,
  body,
  caption,
  small,
  size,
  transform,
  align,
  // styling
  regular,
  bold,
  semibold,
  medium,
  weight,
  light,
  center,
  right,
  spacing, // letter-spacing
  height, // line-height
  // colors
  color,
  accent,
  primary,
  secondary,
  tertiary,
  black,
  white,
  gray,
  gray2,
  style,
  children,
  ...props
}) => {
    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      small && styles.small,
      size && { fontSize: size },
      transform && { textTransform: transform },
      align && { textAlign: align },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
      regular && styles.regular,
      bold && styles.bold,
      semibold && styles.semibold,
      medium && styles.medium,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      tertiary && styles.tertiary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      style // rewrite predefined styles
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
}

export default Typography;


const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: theme.sizes.font,
    color: theme.colors.black
  },
  // variations
  regular: {
    fontWeight: "normal"
  },
  bold: {
    fontWeight: "bold"
  },
  semibold: {
    fontWeight: "500"
  },
  medium: {
    fontWeight: "500"
  },
  light: {
    fontWeight: "200"
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  accent: { color: theme.colors.accent },
  primary: { color: theme.colors.primary },
  secondary: { color: theme.colors.secondary },
  tertiary: { color: theme.colors.tertiary },
  black: { color: theme.colors.black },
  white: { color: theme.colors.white },
  gray: { color: theme.colors.gray },
  gray2: { color: theme.colors.gray2 },
  // fonts
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  title: theme.fonts.title,
  body: theme.fonts.body,
  caption: theme.fonts.caption,
  small: theme.fonts.small
});