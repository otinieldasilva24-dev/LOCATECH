import { createBrowserRouter } from 'react-router-dom';
import { AuthLayoutPacient } from './pages/_layouts/auth';
import { SignUpGestor } from './pages/auth/sign-up';
import { AppLayoutAdmin } from './pages/_layouts/app';
import { Home } from './pages/auth/lading-page';
import { SelectAccountType } from './pages/auth/accountType';
import { SuccessAccount } from './pages/auth/succseeAccount';
import { ErrorAccount } from './pages/auth/errorAccount';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayoutAdmin />, 
    children: [
      { path: '/', element: <Home /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayoutPacient />, // Layout com fundo de posto e vidro
    children: [
      { path: 'select-type', element: <SelectAccountType /> }, 
      { path: 'sign-up-gestor', element: <SignUpGestor /> },
      
      // Novas rotas de feedback
      { path: 'success', element: <SuccessAccount /> }, // Imagem 4
      { path: 'error', element: <ErrorAccount /> },     // Imagem 5
    ],
  },
]);