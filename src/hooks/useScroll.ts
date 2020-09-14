import { useRef } from "react";

export const useScroll = () => {
  const htmlElRef: any = useRef(null);
  const executeScroll = () => window.scrollTo(0, htmlElRef.current?.offsetTop);

  return [executeScroll, htmlElRef];
};
