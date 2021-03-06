import { useEffect, MutableRefObject } from "react";


export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export const useOutsideClick = (ref: MutableRefObject<null | HTMLDivElement>, callback: () => void) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
