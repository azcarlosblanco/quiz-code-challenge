import { StackNavigationProp } from "@react-navigation/stack";

export type BlockProps = {
    flex?: Number | Boolean;
    row?: Boolean;
    column?: Boolean;
    center?: Boolean;
    middle?: Boolean;
    left?: Boolean;
    right?: Boolean;
    top?: Boolean;
    bottom?: Boolean;
    card?: Boolean;
    shadow?: Boolean;
    color?: string;
    space?: String;
    padding?: Number | Object;
    margin?: Number | Object;
    animated?: Boolean;
    wrap?: Boolean;
    style?: React.CSSProperties;
};

export type ButtonProps = {
    opacity?: number
    gradient?: Boolean
    color?: string
    startColor?: string
    endColor?: string
    end?: Point
    start?: Point
    locations?: number[]
    shadow?: Boolean
    style?: React.CSSProperties
    onPress: () => void;
  }

export type CardProps = {
    color?: string
    style?: React.CSSProperties,
}

export type SafeAreaBlockProps = {
    style?: React.CSSProperties
}

export type TypographyProps = {
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
    color?: string
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


export type RootStackParamList = {
    Home: undefined;
    Quiz: undefined;
};
  
export type screenOptionstypes = {
    headerShown: boolean;
};
  
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export type NavidationProps = {
  navigation: ProfileScreenNavigationProp;
};
  
type Point = {
    x: number;
    y: number;
};

