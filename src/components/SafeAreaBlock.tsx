import React from "react";
import { useSafeArea, EdgeInsets } from "react-native-safe-area-context";
import Block from "./Block";

type SafeAreaBlockProps = {
  style?: React.CSSProperties
}

const SafeAreaBlock: React.FC<SafeAreaBlockProps> = ({ style, children, ...props }) => {
    const safeAreaInsets: EdgeInsets = useSafeArea();
    
    return (
        <Block padding={[safeAreaInsets.top, safeAreaInsets.left, safeAreaInsets.bottom, safeAreaInsets.right]} {...props}>
            {children}
        </Block>
    );
}

export default SafeAreaBlock;
