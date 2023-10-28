import styled from 'styled-components';
import { white, lightPurple } from '../../values/colors.js';

export const Button1 = styled.button`
  padding: 1rem;
  color: ${white};
  background-color: ${lightPurple};
  border-radius: 10px;
  border: none;
  flex: 1;
  width: 100%; /* Use 100% to fill the width of its container */
`;
