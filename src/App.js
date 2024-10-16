import './App.css';
import AboutPages from './pages/about-page/aboutPage';
import HomePages from './pages/Home-pages/HomePages';
import Pages from './pages/pages';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import ServicePage from './pages/service-page/servicePage';
import ContactPage from './pages/contact-page/contactPage';
import BlogPages from './pages/blog-pages/blogPage';
import PortfolioPage from './pages/Portfolio-page/Portfolio-Page';


function App() {
  return (
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route index element={<HomePages />} />
          <Route path="about" element={<AboutPages />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blogs" element={<BlogPages />} />
        </Routes>
      
  );
}

export default App;
