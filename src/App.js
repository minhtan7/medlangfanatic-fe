import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import CoursePage from './pages/CoursePage/CoursePage';
import NotFoundPage from './pages/NotFoundPage';
import ThankyouPage from "./pages/ThankyouPage/ThankyouPage"
import FormPage from './pages/FormPage/FormPage';
import HomePage from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/:slug' element={<CoursePage />} />
        <Route path='/thankyou' element={<ThankyouPage />} />
        <Route path='/register-form' element={<FormPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
