import { FC  } from "react";
import { StyleSheet, Text } from "react-native";
import { DefaultTextProps } from "../props/chip.props";

export const DefaultText: FC<DefaultTextProps> = (props) => {
  const { children, style: styleImpl = {}, testID } = props;
  const style = StyleSheet.flatten(styleImpl);

  return (
    <Text {...props} style={style} testID={testID} allowFontScaling={false}>
      {children}
    </Text>
  );
};

DefaultText.displayName = "DefaultText";
