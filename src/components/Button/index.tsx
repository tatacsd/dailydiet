// Button.tsx
import theme from '@theme/index';
import { Pencil, Plus, Trash } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, Title } from './styles';
type ButtonTypeProps = TouchableOpacityProps & {
  title: string;
  buttonType?: ButtonTypeStyleProps;
  iconType: IconTypeProps;
};

export type IconTypeProps = 'DELETE' | 'EDIT' | 'PLUS' | 'NONE';

const renderIcon = (
  iconType: IconTypeProps,
  buttonType: ButtonTypeStyleProps,
  COLORS: typeof theme.COLORS
) => {
  const iconColor = buttonType === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_200;

  switch (iconType) {
    case 'DELETE':
      return <Trash size={18} color={iconColor} />;
    case 'EDIT':
      return <Pencil size={18} color={iconColor} />;
    case 'PLUS':
      return <Plus size={18} color={iconColor} />;
    default:
      return null;
  }
};

export function Button({
  title,
  buttonType = 'PRIMARY',
  iconType,
  ...rest
}: ButtonTypeProps) {
  const { COLORS } = theme;
  const invertedButtonType = buttonType === 'PRIMARY' ? 'SECONDARY' : 'PRIMARY';

  return (
    <Container buttonType={buttonType} {...rest}>
      {renderIcon(iconType, buttonType, COLORS)}
      <Title buttonType={invertedButtonType}>{title}</Title>
    </Container>
  );
}
