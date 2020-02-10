import React from 'react';
import { QuizState, QuizButtonAction, Action } from '../utils/types';

export const initialStateValues: QuizState = {
	quiz: [],
	selectedQuizId: 0,
	score: 0,
	correctAnswers: [],
	endQuiz: false,
	setAnswer: (answer: QuizButtonAction, dispatch: React.Dispatch<Action>) => {},
	fetchQuiz: () => {},
	clearQuiz: () => {}
} as QuizState;

export const GameContext = React.createContext<QuizState>(initialStateValues);