import React from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import { Block, Text, Button, SafeAreaBlock } from "../components";
import { theme } from "./../constants";
import { RootStackParamList } from "../navigation";

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type HomeProps = {
  navigation: ProfileScreenNavigationProp;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {    
    return (
        <SafeAreaBlock>
            <Block center middle>
                <Text h1 center bold>
                    Welcome to the 
                    <Text h1 primary>
                    {" "}
                        Trivia Challenge!.
                    </Text>
                </Text>
                <Text h3 gray center style={{ marginTop: theme.sizes.padding / 2 }}>
                    You will be presented with 10 true or false questions.
                </Text>
                <Text h3 gray center style={{ marginTop: theme.sizes.padding / 2 }}>
                    Can you score 100%?
                </Text>
            </Block>
            <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
                <Button gradient onPress={() => navigation.navigate('Home')}>
                    <Text center semibold white>
                        Begin
                    </Text>
                </Button>   
            </Block>
        </SafeAreaBlock>
    )
}

export default Home;
