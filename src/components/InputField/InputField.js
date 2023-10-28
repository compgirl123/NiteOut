import React from 'react';
import styled from 'styled-components'; // Import styled-components
import { darkPurple } from '../../values/colors.js';

const InputField1 = styled.input`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #E9D3FF;
  outline: none;

  width: 100%; /* Use 100% to fill the width of its container */
  background-color: #E9D3FF;
  align-items: center;
  position: relative;
  display: inline-block;
`;

const InputFieldMargin = styled(InputField1)`
  margin: 0px;
`;

const InputIcon = styled.i`
  position: absolute;
  color: ${darkPurple};
  transform: translate(-40px, 25px);
`;

/**
 * InputField Component
 * This Component contains the Code for the Input Field
 * This is a reusable Component that can be used for many pages.
 */
export const InputField = (props) => {
  const { id, type, placeholder, onChange, value } = props;

  return (
    <>
      <div className="input-field">
        <InputFieldMargin
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <InputIcon className="fas fa-icon" />
      </div>
    </>
  );
};
