import { useEffect } from 'react';
import { MainRouter } from './routes/MainRouter';

import './styles/global.css';
import './styles/theme.css';

export function App() {
   useEffect(() => {
    const overflows: Element[] = [];
    document.querySelectorAll<HTMLElement>('*').forEach(el => {
      if (el.scrollWidth > document.documentElement.clientWidth) {
        overflows.push(el);
      }
    });
    console.log('Elementos com overflow:', overflows);
    // no console do browser: inspect(overflows[0])
  }, []);

  
  return (
    <MainRouter/>
  );
}
