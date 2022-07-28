import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    success: 'green',
    danger: 'red'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 8px;
    border: 0;
    color: white;

    ${props => {
        return css`
            background: ${buttonVariants[props.variant]}
        `
    }}
`;

// .primary {
//     background: purple;
// }

// .secondary {
//     background: orange;
// }

// .success {
//     background: green;
// }

// .danger {
//     background: red;
// }