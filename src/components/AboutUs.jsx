// AboutUs.jsx
import React from 'react';
import { Card } from 'antd';

const AboutUs = () => {
  return (
    <section id="about" className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <Card className="mx-auto max-w-4xl">
        <p>Sharma Tour & Travels has been a trusted name in the travel industry for over a decade. We specialize in offering personalized travel experiences tailored to your needs.</p>
      </Card>
    </section>
  );
};

export default AboutUs;