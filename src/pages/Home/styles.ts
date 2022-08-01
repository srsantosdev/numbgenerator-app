import styled, { css } from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Page = styled.SafeAreaView`
  background-color: ${theme.colors.primary.main};
  flex: 1;
`

export const Container = styled.View`
  padding: 24px;
  flex: 1;
`;

export const ContainerLogo = styled.View`
  padding: 108px 24px 0px;
  padding-horizontal: 24px;
`

export const TitlePage = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.outline.light};

  margin-bottom: ${theme.common.spacings.xl}px;
`

type InputFieldProps = {
  isFilled?: boolean;
  isFocused?: boolean;
}

export const InputField = styled.TextInput<InputFieldProps>`
  height: 50px;
  border-width: 1px;
  border-radius: ${theme.common.spacings.xs}px;
  border-color: ${theme.colors.outline.main};
  padding: 0 ${theme.common.spacings.sm}px;
  font-size: 16px;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.text.main};

  ${props => (props.isFilled || props.isFocused) && css`
    border-color: ${theme.colors.secondary.main};
    color: ${theme.colors.secondary.main};
  `}
`

export const Label = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.text};
  margin-bottom: ${theme.common.spacings.xxs}px;
  color: ${theme.colors.text.main};
`

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.secondary.main};
  padding: ${theme.common.spacings.sm}px ${theme.common.spacings.md}px;
  border-radius: ${theme.common.spacings.xs}px;
  margin-top: ${theme.common.spacings.xxl}px;

  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.outline.dark};
`

export const NumberText = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.title};
  color: ${theme.colors.secondary.main};
`