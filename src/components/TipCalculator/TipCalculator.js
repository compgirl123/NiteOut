import React from 'react';
import { ThemeWrapper } from '../ThemeWrapper/ThemeWrapper';
import { InputField } from '../InputField/InputField';
import { useState } from "react";
import {TipTemplate} from "./TipTemplate/TipTemplate";

const TipCalculator = () => {
  const [value, setValue] = useState('');
  return (
    <>
    <ThemeWrapper>
      <label for="totalCost">Total Cost</label><br></br>
      <InputField
        id = "totalCost"
        type="text"
        placeholder="Add Total Cost Here"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    <TipTemplate>
      <h1>asdfa</h1>
     </TipTemplate>
    </ThemeWrapper>
    </>
  )
}

export default TipCalculator;
