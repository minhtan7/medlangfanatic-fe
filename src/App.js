import './App.css';
import "./notioncss.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import CoursePage from './pages/CoursePage/CoursePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ThankyouPage from "./pages/ThankyouPage/ThankyouPage"
import FormPage from './pages/FormPage/FormPage';
// import HomePage from './pages/HomePage';
import SortedRoute from './layout/SortedRoute';
// import TempFormPage from './pages/TempFormPage';
import GamePage from './pages/GamePage';
import EventPage from './pages/EventPage';
import BlogPage from './pages/BlogPage';
import SingleBlogPage from './pages/SingleBlogPage';
// import AllCourse from './pages/AllCourse';
import HomePage from './pages/HomePage';
import { InstructorPage } from './pages/InstructorPage';
import DocumentationPage from './pages/DocumentationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/thankyou/:slug' element={<ThankyouPage />} />
        <Route path='/register-form/:slug' element={<FormPage />} />
        {/* <Route path='/event-form' element={<TempFormPage />} /> */}
        <Route path='/game' element={<GamePage />} />
        <Route path='/instructors/:slug' element={<InstructorPage />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blogs/:slug' element={<SingleBlogPage />} />
        <Route path='/event-form' element={<EventPage />} />
        <Route path='/documentation' element={<DocumentationPage />} />
        {/* <Route path='/:slug'
          element={<SortedRoute>
            <CoursePage />
          </SortedRoute>} /> */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
      <Route element={< SortedRoute />}>
        <Route path='/:slug' element={<CoursePage />} />
      </Route>
    </Routes>
  );
}

export default App;
