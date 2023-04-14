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
  inputRegex,
  inputSuccess
}) => {
  return (
    <div className={`${styles["InputInputIconContainer"]}`}>
      <InputWrapper>
        <Input
          input={input}
          inputId={inputId}
          inputName={inputName}
          inputOnChange={inputOnChange}
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
