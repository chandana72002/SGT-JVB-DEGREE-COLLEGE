import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/AboutPage';
import AchievementsPage from './pages/AchievementsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import AntiRaggingPage from './pages/AntiRaggingPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import DepartmentsPage from './pages/DepartmentsPage';
import EventsPage from './pages/EventsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import FacultyPage from './pages/FacultyPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PlacementsPage from './pages/PlacementsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import VisionMissionPage from './pages/VisionMissionPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vision-mission" element={<VisionMissionPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/anti-ragging" element={<AntiRaggingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
