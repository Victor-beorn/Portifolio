import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '../../pages/home';
import { Experiencias } from '../../pages/experiencia';
import { Portifolio } from '../../pages/portifolio';
import { NotFaund } from '../../pages/notFound';


export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experiencia/' element={<Experiencias />} />
        <Route path='/portifolio/' element={<Portifolio />} />

        <Route path='*' element={<NotFaund />} />
      </Routes>
    </BrowserRouter>
  );
}
