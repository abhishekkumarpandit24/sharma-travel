// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Packages from './components/Packages';
import 'antd/dist/reset.css';
import { Layout } from 'antd';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content style={{ padding: '0 20px', marginTop: '64px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="*" element={<h1 className="text-center mt-10">404 - Page Not Found</h1>} />
            </Routes>
          </div>
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;