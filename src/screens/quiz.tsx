import React from "react";
import { AllHtmlEntities } from 'html-entities';
import { Block, Text, Button, Card, SafeAreaBlock } from "../components";
import { theme } from "../utils";
import { GameContext } from "../context/context";
import { ActivityIndicator } from "react-native";
import { NavidationProps, QuizButtonAction } from "../utils/types";


const Quiz: React.FC<NavidationProps> = ({ navigation }) => {
    const entities = new AllHtmlEntities();

    const {
		quiz,
		selectedQuizId,
		setAnswer,
		endQuiz,
        fetchQuiz,
        correctAnswers
    } = React.useContext(GameContext);

    React.useEffect(() => {
		fetchQuiz();
    }, []);
    
    React.useEffect(() => {
		if (endQuiz) {
            navigation.navigate('Home');
		}
    }, [endQuiz]);
    
    const actionButtonHandler = (answer) => () => setAnswer(answer);

    return (
        <SafeAreaBlock>
            {quiz.length ? (
                <>
                    <Block center middle flex={0.5}>
                        <Text h1 center bold>
                            Category: {quiz[selectedQuizId].category}
                        </Text>
                    </Block>
                    <Card center middle margin={[0, theme.sizes.padding]}>
                        <Text h2 center bold primary>
                            {entities.decode(quiz[selectedQuizId].question)}
                        </Text>
                    </Card>
                    <Block center middle flex={0.1}>
                        <Text h3 gray center>
                            { selectedQuizId + 1 } / {quiz.length}
                        </Text>
                    </Block>
                    <Block row middle center flex={0.5}>
                        <Block margin={[0, theme.sizes.padding]}>
                            <Button color="secondary" onPress={actionButtonHandler(QuizButtonAction.TRUE)}>
                                <Text center semibold white>
                                    True
                                </Text>
                            </Button>  
                        </Block>
                        <Block margin={[0, theme.sizes.padding]}>
                            <Button color="black" onPress={actionButtonHandler(QuizButtonAction.FALSE)}>
                                <Text center semibold white>
                                    False
                                </Text>
                            </Button>  
                        </Block>
                    </Block>
                </>
            ) : (
                <Block center middle>
                    <ActivityIndicator size="large" color={theme.colors.primary} />
                </Block>
            )}
        </SafeAreaBlock>
    )
}

export default Quiz;
