import React from 'react';
import { CLEAR_QUIZ, FETCH_QUIZ, SET_ANSWER } from './reducer';
import { initialStateValues } from './context';
import { ApiResponse, QuizButtonAction, Action } from '../utils/types';

export const getQuiz = async () => {
	const response = await fetch(
		'https://opentdb.com/api.php?amount=10&type=boolean'
	);

	return await response.json();
};

export const setAnswer = (answer: QuizButtonAction, dispatch: React.Dispatch<Action>) => {
	dispatch({ type: SET_ANSWER, payload: answer });
};

export const clearQuiz = (dispatch: React.Dispatch<Action>) => {
	dispatch({ type: CLEAR_QUIZ, payload: initialStateValues });
};

export const fetchQuiz = (dispatch: React.Dispatch<Action>) => {
	getQuiz()
		.then((data: ApiResponse) => {
			dispatch({ type: FETCH_QUIZ, payload: data.results });
		})
		.catch(e => console.log('Error loading quiz'));
};