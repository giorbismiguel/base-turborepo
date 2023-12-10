import type { Theme } from '@mui/material';
import { Box, styled } from '@mui/material';
import classNames from 'classnames';
import get from 'lodash/get';
import React from 'react';
import type { TypographyCreator, TypographyOptionsProps, TypographyProps, TypographyStyleProps } from './typography.types';

const getValueFromTheme = (theme: Theme, typography: string, field: string, defaultValue: any) => {
  const value = get(typography, `typography.${typography}.${field}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return value || defaultValue;
};

// @ts-ignore
const styleTypography = (theme: Theme, component: ElementType<any> | undefined, {
  fontSize,
  fontWeight,
  lineHeight
}: TypographyOptionsProps) => (
  {
    fontSize: getValueFromTheme(theme, component, 'fontSize', fontSize),
    fontWeight: getValueFromTheme(theme, component, 'fontWeight', fontWeight),
    lineHeight: getValueFromTheme(theme, component, 'lineHeight', lineHeight)
  }
);


const StyledBox = styled(Box)<TypographyStyleProps>(({ textTransform, ellipsis, defaultValues, theme }) => ({
  textTransform: textTransform || 'none',
  whiteSpace: ellipsis ? 'nowrap' : 'normal',
  overflow: ellipsis ? 'hidden' : '',
  textOverflow: ellipsis ? 'ellipsis' : '',
  ...styleTypography(theme, defaultValues.component, defaultValues)
}));

const createTypographyComp: (config: TypographyCreator) => (props: TypographyProps) => JSX.Element = ({
                                                                                                        component,
                                                                                                        fontSize,
                                                                                                        fontWeight,
                                                                                                        lineHeight,
                                                                                                        marginBottom = 0
                                                                                                      }) => {
  // eslint-disable-next-line react/display-name, func-names
  return function(props: TypographyProps) {
    const { children, className, ellipsis, secondary, gutterBottom, block, ...rest } = props;
    // @ts-ignore
    return (
      <StyledBox
        className={classNames({
          [className || '']: true
        })}
        color={secondary ? 'secondary.500' : undefined}
        component={component}
        defaultValues={{
          component,
          fontSize,
          fontWeight,
          lineHeight
        }}
        display={block ? 'block' : undefined}
        ellipsis={ellipsis}
        mb={marginBottom}
        mt={gutterBottom?0: undefined}
        {...rest}
      >
        {children}
      </StyledBox>
    );
  };
};


export const H1 = createTypographyComp({
  component: 'h1',
  fontSize: '28px',
  fontWeight: '600',
  lineHeight: 1.5
});

export const H2 = createTypographyComp({
  component: 'h2',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: 1.5
});

export const H3 = createTypographyComp({
  component: 'h3',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: 1.5
});

export const H4 = createTypographyComp({
  component: 'h4',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: 1.5
});

export const H5 = createTypographyComp({
  component: 'h5',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: 1.5
});

export const H6 = createTypographyComp({
  component: 'h6',
  fontSize: '13px',
  fontWeight: '500',
  lineHeight: 1.5
});

export const Paragraph = createTypographyComp({
  component: 'p',
  fontSize: '14px',
  marginBottom: '12px'
});

export const Small = createTypographyComp({
  component: 'small',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: 1.5
});

export const Span = createTypographyComp({
  component: 'span',
  lineHeight: 1.5
});

export const Tiny = createTypographyComp({
  component: 'small',
  fontSize: '11px',
  lineHeight: 1.5
});
