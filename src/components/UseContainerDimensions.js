import { useState, useEffect } from "react";
export const useContainerDimensions = ( myRef, open ) => {
    const getDimensions = () => {
        return {
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight}
    }
  
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
    useEffect(() => {
      const handleResize = () => {
        if (open)
        setDimensions(getDimensions())
      }
  
      if (myRef.current) {
        setDimensions(getDimensions())
      }
  
      window.addEventListener("resize", handleResize)
  
      return () => {
        window.removeEventListener("resize", handleResize)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])
  
    return dimensions;
  };