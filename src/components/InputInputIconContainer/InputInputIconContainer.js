import { Input } from '../Input/Input.js';
import { InputIcon } from '../InputIcon/InputIcon.js';
import { InputIconWrapper } from '../InputIconWrapper/InputIconWrapper.js';
import { InputWrapper } from '../InputWrapper/InputWrapper.js';
import styles from './InputInputIconContainer.module.scss';

export const InputInputIconContainer = ({
  input,
  inputId,
  inputName,
  inputOnChange,
  isEmptyInput,
  isInputSuccess,
  regexPattern
}) => {
  return (
    <div className={`${styles["InputInputIconContainer"]}`}>
      <InputWrapper>
        <Input
          input={input}
          inputId={inputId}
          inputName={inputName}
          inputOnChange={inputOnChange}
          isEmptyInput={isEmptyInput}
          isInputSuccess={isInputSuccess}
          regexPattern={regexPattern}
        />
      </InputWrapper>
      <InputIconWrapper>
        <InputIcon 
          isEmptyInput={isEmptyInput} 
          isInputSuccess={isInputSuccess}
        />
      </InputIconWrapper>
    </div>
  );
};
