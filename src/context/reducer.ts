import {
	QuizState,
	Action,
	QuizButtonAction,
	CorrectAnswerSchema
} from '../utils/types';

export const FETCH_QUIZ = 'FETCH_QUIZ';
export const CLEAR_QUIZ = 'CLEAR_QUIZ';
export const SET_ANSWER = 'SET_ANSWER';

export const quizReducer = (state: QuizState, action: Action): QuizState => {
	switch (action.type) {
		case FETCH_QUIZ:
			return {
				...state,
				quiz: [...action.payload]
			};
		case SET_ANSWER:
			return setAnswer(state, action.payload);
		case CLEAR_QUIZ:
			return {
				...action.payload
			};
		default:
			return state;
	}
};

const setAnswer = (
	state: QuizState,
	payload: QuizButtonAction
): QuizState => {
	const correctAnswer =
		payload.valueOf() === state.quiz[state.selectedQuizId].correct_answer;

	const isLastQuestion = state.selectedQuizId === state.quiz.length - 1;

	return {
		...state,
		selectedQuizId: isLastQuestion
			? state.selectedQuizId
			: state.selectedQuizId + 1,
		correctAnswers: correctAnswer
			? [
					...state.correctAnswers,
					{
						quizId: state.selectedQuizId,
						submittedAnswer: payload.valueOf()
					} as CorrectAnswerSchema
			  ]
			: state.correctAnswers,
		score: correctAnswer ? state.score + 1 : state.score,
		endQuiz: isLastQuestion
	};
};