import React from 'react';
import { Button1 } from './Button.style.js';

export const Button = (props) => {
  const {type, onClick, isDisabled, children} = props;

  return (
    <div>
      <Button1 type={type}
        onClick={onClick}
        disabled = {isDisabled}>{children}
      </Button1>
    </div>
  )
}
