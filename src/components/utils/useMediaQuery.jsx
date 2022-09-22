import { useState, useEffect, useCallback } from "react";

 
export const useMediaQueryHook = (width) => {
  const [targetReached, setTargetReached] = useState(false);
  const updateTarget = useCallback((e) => {
    
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    // console.log("from useEffect", media)
    media.addEventListener('change', e => updateTarget(e));
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', e => updateTarget(e));
  }, []);

  return targetReached;
};
