import { useEffect, useState } from 'react';
import '../styles/ModalContainer.css';

export const CoverScreen = () => {
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 500);
  
      return () => clearTimeout(timer);
    }, []);
  
    return visible ? <div className="coverscreen"></div> : null;
  };