import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }:any) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.pathname]);

  return children; // Render the children components (like RouterApp)
};

export default ScrollToTop;
