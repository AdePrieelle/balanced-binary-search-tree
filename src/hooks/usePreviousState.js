import { useEffect, useRef } from "react";

export const usePreviousState = (state) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = state;
  },[state]);
  return ref.current;
};
