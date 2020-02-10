import * as React from 'react';
import { GameContext, initialStateValues } from '../context/context';
import { quizReducer } from '../context/reducer';
import { QuizButtonAction } from '../utils/types';
import { setAnswer, fetchQuiz, clearQuiz } from './actions';

const StoreProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(quizReducer, initialStateValues);

	return (
		<GameContext.Provider
			value={{
				...state,
				setAnswer: (answer: QuizButtonAction) => setAnswer(answer, dispatch),
				fetchQuiz: () => fetchQuiz(dispatch),
				clearQuiz: () => clearQuiz(dispatch)
			}}>
			{children}
		</GameContext.Provider>
	);
};

export default StoreProvider;