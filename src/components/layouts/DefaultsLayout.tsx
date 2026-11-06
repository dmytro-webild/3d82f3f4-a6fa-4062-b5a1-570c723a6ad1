import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultsLayout = () => {
  useEffect(() => {
    document.body.classList.add('use-defaults');
    return () => document.body.classList.remove('use-defaults');
  }, []);

  return <Outlet />;
};

export default DefaultsLayout;
