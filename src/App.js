import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import CoursePage from './pages/CoursePage/CoursePage';
import NotFoundPage from './pages/NotFoundPage';
import ThankyouPage from "./pages/ThankyouPage/ThankyouPage"
import FormPage from './pages/FormPage/FormPage';
import HomePage from './pages/Homepage';
import SortedRoute from './layout/SortedRoute';
// import TempFormPage from './pages/TempFormPage';
import GamePage from './pages/GamePage';
import EventPage from './pages/EventPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/thankyou' element={<ThankyouPage />} />
        <Route path='/register-form' element={<FormPage />} />
        {/* <Route path='/event-form' element={<TempFormPage />} /> */}
        <Route path='/game' element={<GamePage />} />
        <Route path='/event-form' element={<EventPage />} />
        <Route path='/:slug'
          element={<SortedRoute>
            <CoursePage />
          </SortedRoute>} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
