import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Home } from '../../pages/home';
import { Experiencias } from '../../pages/experiencia';
import { Portifolio } from '../../pages/portifolio';
import { NotFaund } from '../../pages/notFound';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 , behavior: 'smooth'});
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experiencia/' element={<Experiencias />} />
        <Route path='/portifolio/' element={<Portifolio />} />

        <Route path='*' element={<NotFaund />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
