import { useEffect } from "react";

const CONFIG = {
  childList: true, // observe direct children
  subtree: true, // and lower descendants too
};

/**
 *
 * useMutationObserver hook
 * return mutation observer for a reference element and invoke's the callback function
 *
 * @params reference of a element on which mutation are to be observer
 * @params callback function that need to be fired on mutation
 * @returns mutation observer for a reference element and invoke's the callback function
 *
 **/

function useMutationObserver(ref, callback) {
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback);
      observer.observe(ref.current, CONFIG);

      return () => observer.disconnect();
    }
  }, [ref, callback]);
}

export default useMutationObserver;
