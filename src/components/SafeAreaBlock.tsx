import React from "react";
import { useSafeArea, EdgeInsets } from "react-native-safe-area-context";
import Block from "./Block";
import { BlockProps, SafeAreaBlockProps } from "../utils/types";

const SafeAreaBlock: React.FC<SafeAreaBlockProps | BlockProps> = ({ style, children, ...props }) => {
    const safeAreaInsets: EdgeInsets = useSafeArea();
    
    return (
        <Block 
        padding={[safeAreaInsets.top, safeAreaInsets.left, safeAreaInsets.bottom, safeAreaInsets.right]} 
        style={style}
        {...props}>
            {children}
        </Block>
    );
}

export default SafeAreaBlock;
