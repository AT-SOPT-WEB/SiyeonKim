
import { createBrowserRouter } from 'react-router';
import PokemonDetail from '../pages/PokemonDetail';
import Home from '../pages/Home';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokemon/:name',
    element: <PokemonDetail />,
  },
]);

export default Router;