import styled from 'styled-components';
/* Import the COLORS object from the specified file */
import { darkPurple } from '../../values/colors.js'; // Adjust the import path

export const InputField1 = styled.input`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #E9D3FF;
  outline: none;
  height: 30px;
  background-color:#E9D3FF;
  width: 100%; /* Set the width to 100% to grow with its container */
  align-items: center;
  position: relative;
  display: inline-block;
`;

// A new component based on Button, but with some override styles
export const InputFieldMargin = styled(InputField1)`
  margin: 10px;
`;

// Define a styled component for the icon
export const InputIcon = styled.i`
  position: absolute;
  color: ${darkPurple};
  transform: translate(-40px,25px);
`;
