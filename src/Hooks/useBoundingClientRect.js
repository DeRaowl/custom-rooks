import { useCallback, useEffect, useState } from "react";
import useMutationObserver from "./useMutationObserver";

/**
 * @params element to get it's clientRect
 * @returns clientRect of a element
 **/

const getBoundingClientRect = (element) => {
  return element.getBoundingClientRect();
};

/**
 *
 * useBoundingClientRect hooks
 * @params reference of an element to get it's ClientRect
 * @returns clientRect of a reference element
 *
 **/

function useBoundingClientRect(ref) {
  const [value, setValue] = useState(null);

  const handleUpdate = useCallback(() => {
    setValue(ref.current ? getBoundingClientRect(ref.current) : null);
  }, [ref]);

  useEffect(() => {
    handleUpdate();
  }, [handleUpdate]);

  useMutationObserver(ref, handleUpdate);

  return value;
}

export default useBoundingClientRect;
