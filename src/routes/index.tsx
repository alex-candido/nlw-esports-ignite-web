import { Route, Routes } from 'react-router-dom';
import Game from '../pages/Game';
import Home from '../pages/Home';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
    </Routes>
  );
};

export default Router;
