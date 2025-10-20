import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const OurProjects = React.lazy(() => import('./pages/OurSolution'));
const OurImpact = React.lazy(() => import('./pages/OurImpact'));
const GetInvolved = React.lazy(() => import('./pages/PartnerWithUs'));
const NewsEvents = React.lazy(() => import('./pages/Blog'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop/>
          <Layout>
            <Suspense 
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/our-projects" element={<OurProjects />} />
                <Route path="/our-impact" element={<OurImpact />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/news-events" element={<NewsEvents />} />
                <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;