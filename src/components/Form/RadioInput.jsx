import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--colors-blank);
  border: 1.5px solid var(--colors-pigeon);
  border-radius: 12px;
  width: 255px;
  height: 68px;
  padding: 16px 26px 16px 20px;
  position: relative;

  p {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  span {
    padding-top: 4px;
    font-size: 12px;
    line-height: 117%;
    color: var(--colors-lynch);
  }

  input {
    display: none;
  }
`;

const CustomRadioInput = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  border-radius: 100%;
  border: 1px solid var(--colors-lynch);
  top: 22px;
  right: 20px;

  ${({ checked }) => checked ? `
    border: 1px solid var(--colors-irisBlue);
  ` : null};
`;

const CustomRadioInputDot = styled.div`
  animation: appear 0.2s;
  border: 5px solid vaR(--colors-irisBlue);
  border-radius: 100%;
  content: '';
  left: 2px;
  position: absolute;
  top: 2px;
`;

function RadioInput ({ label, name, checked, text, onChange, ...props }) {
   return (
     <Label htmlFor={`radio-${label}`} onClick={onChange}>
       <div>
         <p>{label}</p>
         <span>{text}</span>
       </div>
       <CustomRadioInput checked={checked}>
         {checked && <CustomRadioInputDot />}
       </CustomRadioInput>
       <input
         id={`radio-${label}`}
         type="radio"
         name={name}
         checked={checked}
         {...props}
       />
     </Label>
   );
 };

 export default RadioInput;