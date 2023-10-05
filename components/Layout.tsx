import { FC } from "react";
import { View } from "react-native";
import { TElement, TStyles } from "../types/others";

type TProps = {
  children: TElement;
  style?: TStyles;
};

export const Layout: FC<TProps> = (props) => {
  const { children, style } = props;

  return <View style={{ flex: 1, padding: 20, ...style }}>{children}</View>;
};
