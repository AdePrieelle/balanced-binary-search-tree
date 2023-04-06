import styles from './InputInputIconContainer.module.scss';
import { Input } from '../Input/Input.js';
import { InputWrapper } from '../InputWrapper/InputWrapper.js';
import { InputIcon } from '../InputIcon/InputIcon.js';
import { InputIconWrapper } from '../InputIconWrapper/InputIconWrapper.js';

export const InputInputIconContainer = ({
  id,
  input,
  inputOnChange,
  inputName,
  inputSuccess,
  inputRegex
}) => {
  return (
    <div className={`${styles["InputInputIconContainer"]}`}>
      <InputWrapper>
        <Input
          id={id}
          input={input}
          inputOnChange={inputOnChange}
          inputName={inputName}
          inputRegex={inputRegex}
          inputSuccess={inputSuccess}
        />
      </InputWrapper>
      <InputIconWrapper>
        <InputIcon 
          input={input} 
          inputSuccess={inputSuccess}
        />
      </InputIconWrapper>
    </div>
  );
};
