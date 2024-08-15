import './App.css';
import AboutPages from './pages/about-page/aboutPage';
import HomePages from './pages/Home-pages/HomePages';
import Pages from './pages/pages';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import ServicePage from './pages/service-page/servicePage';
import ContactPage from './pages/contact-page/contactPage';
import SkillsPage from './pages/skills-page/skillsPage';
import Footer from './component/FooterSection/Footer';
import BlogPages from './pages/blog-pages/blogPage';


function App() {
  return (
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route index element={<HomePages />} />
          <Route path="about" element={<AboutPages />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="blogs" element={<BlogPages />} />
        </Routes>
      
  );
}

export default App;
