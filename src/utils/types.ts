import { StackNavigationProp } from "@react-navigation/stack";
import { GestureResponderEvent } from "react-native";

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
    onPress: (answer: GestureResponderEvent) => void;
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
  
export type ScreenOptionstypes = {
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

export type ApiResponse = {
	response_code: number;
	results: Array<QuizSchema>;
}

export type QuizSchema = {
	category: string;
	question: string;
	correct_answer: String;
	incorrect_answers: Array<String>;
}

export enum QuizButtonAction {
	TRUE = 'True',
	FALSE = 'False',
	PLAY_AGAIN = 'Play Again'
}

export type QuizState = {
	quiz: Array<QuizSchema>;
	selectedQuizId: number;
	score: number;
	correctAnswers: Array<CorrectAnswerSchema>;
	setAnswer: (answer: QuizButtonAction) => void;
	endQuiz: boolean;
	fetchQuiz: () => void;
	clearQuiz: () => void;
}

export type CorrectAnswerSchema = {
	quizId: number;
	submittedAnswer: String;
}

export type Action = {
	type: string;
	payload: any;
}