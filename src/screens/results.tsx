import React from "react";
import { Block, Text, Button, Card } from "../components";
import { theme } from "../utils";
import { AllHtmlEntities } from 'html-entities';
import { GameContext } from "../context/context";
import { ScrollView } from "react-native-gesture-handler";

const Results = ({ navigation }) => {
    const entities = new AllHtmlEntities();

    const {
        quiz,
        correctAnswers,
        score,
        clearQuiz,
        endQuiz
    } = React.useContext(GameContext);

    const actionButtonHandler = () => () => {
		clearQuiz();
		navigation.navigate('Quiz')
    };
    
    
    const displayAnswers = () => {
        return quiz.map((quiz, index) => {
            const correctAnswersKeys = correctAnswers.map(wrongAnswer => wrongAnswer.quizId);
            const color = correctAnswersKeys.includes(index) ? 'primary': 'danger';

            return (
                <Card middle key={index} margin={[0, 0, theme.sizes.padding / 3]}>
                    <Text title color={color}>
                        <Text bold h2 color={color}>{correctAnswersKeys.includes(index) ? '+': '-'}</Text> {entities.decode(quiz.question)}
                    </Text>
                </Card>
            )
        });
    }

    return (
        <Block>
            <Block center middle flex={0.3}>
                <Text h1 center bold>
                    You scored
                </Text>
                <Text h2 gray>
                    {score} / {quiz.length}
                </Text>
            </Block>
            <ScrollView style={{flex: 1, marginLeft: theme.sizes.padding, marginRight: theme.sizes.padding }}>
                <Block middle>
                    {endQuiz ? displayAnswers() : null}
                </Block>
            </ScrollView>
            <Block middle flex={0.3} margin={[0, theme.sizes.padding * 2]}>
                <Button gradient onPress={actionButtonHandler()}>
                    <Text center semibold white>
                        Play Again?
                    </Text>
                </Button>   
            </Block>
        </Block>
    )
}

export default Results;
