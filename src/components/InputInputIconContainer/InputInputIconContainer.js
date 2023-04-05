import styles from './InputInputIconContainer.module.scss';
import { Input } from '../Input/Input.js';
import { InputIcon } from '../InputIcon/InputIcon.js';
import { Wrapper } from '../Wrapper/Wrapper.js';
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
      <Wrapper>
        <Input
          id={id}
          input={input}
          inputOnChange={inputOnChange}
          inputName={inputName}
          inputRegex={inputRegex}
          inputSuccess={inputSuccess}
        />
      </Wrapper>
      <InputIconWrapper>
        <InputIcon 
          input={input} 
          inputSuccess={inputSuccess}
        />
      </InputIconWrapper>
    </div>
  );
};
