import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  success: 'green',
  danger: 'red',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  margin: 8px;
  border: 0;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};

  /* ${(props) => {
    return css`
      background: ${buttonVariants[props.variant]};
    `
  }} */
`
