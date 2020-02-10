import React from "react";
import { Block, Text, Button, Card } from "../components";
import { theme } from "../utils";
import { NavidationProps } from "../utils/types";

const Quiz: React.FC<NavidationProps> = () => {
    return (
        <Block>
            <Block center middle flex={0.5}>
                <Text h1 center bold>
                    Category: Category Test
                </Text>
            </Block>
            <Card center middle margin={[0, theme.sizes.padding]}>
                <Text h2 center bold primary>
                    Test question
                </Text>
            </Card>
            <Block center middle flex={0.1}>
                <Text h3 gray center>
                    1/10
                </Text>
            </Block>
            <Block row middle center flex={0.5}>
                <Block margin={[0, theme.sizes.padding]}>
                    <Button color="secondary" onPress={() => {}}>
                        <Text center semibold white>
                            True
                        </Text>
                    </Button>  
                </Block>
                <Block margin={[0, theme.sizes.padding]}>
                    <Button color="black" onPress={() => {}}>
                        <Text center semibold white>
                            False
                        </Text>
                    </Button>  
                </Block>
            </Block>
        </Block>
    )
}

export default Quiz;
