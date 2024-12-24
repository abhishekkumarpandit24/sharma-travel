// Services.jsx
import React from 'react';
import { Card, Col, Row } from 'antd';

const Services = () => {
  const services = [
    "Domestic Travel",
    "International Travel",
    "Hotel Bookings",
    "Vehicle Rentals",
    "Customized Tour Packages",
  ];

  return (
    <section id="services" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <Row gutter={[16, 16]}>
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card className="text-center shadow">
              <p>{service}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;