import type { BoxProps } from "@mui/material/Box/Box";
import type { ElementType } from "react";

export interface TypographyOptionsProps {
  fontSize?: string;
  fontWeight?: string;
  component: string;
  lineHeight?: number;
  marginBottom?: string | number;
}

export type TypographyStyleProps = BoxProps & {
  ellipsis?: boolean;
  textTransform?:
    | "capitalize"
    | "inherit"
    | "initial"
    | "lowercase"
    | "uppercase"
    | "none";
  defaultValues: TypographyOptionsProps;
};

export type TypographyCreator = TypographyOptionsProps & {
  component: ElementType | undefined;
};

export type TypographyProps = BoxProps & {
  ellipsis?: boolean;
  gutterBottom?: boolean;
  secondary?: boolean;
  block?: boolean;
  textTransform?:
    | "capitalize"
    | "inherit"
    | "initial"
    | "lowercase"
    | "uppercase"
    | "none";
};
