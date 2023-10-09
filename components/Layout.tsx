import { FC } from "react";
import { View } from "react-native";
import { TElement, TStyled } from "../types/others";
import { colors } from "../configs/colors";

type TProps = TStyled & {
  children: TElement;
};

export const Layout: FC<TProps> = (props) => {
  const { children, style } = props;

  return <View style={{ flex: 1, padding: 20, backgroundColor: colors.white, ...style }}>{children}</View>;
};
