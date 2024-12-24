// Packages.jsx
import React from 'react';
import { Card, Col, Row, Button } from 'antd';

const Packages = () => {
  const packages = [
    { title: "Goa Getaway", duration: "5 Days / 4 Nights", price: "₹5000" },
    { title: "Manali Adventure", duration: "6 Days / 5 Nights", price: "₹6000" },
    { title: "Kerala Backwaters", duration: "7 Days / 6 Nights", price: "₹7000" },
  ];

  return (
    <section id="packages" className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Packages</h2>
      <Row gutter={[16, 16]}>
        {packages.map((pkg, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card className="shadow">
              <h3 className="text-xl font-bold">{pkg.title}</h3>
              <p className="mt-2">Duration: {pkg.duration}</p>
              <p className="mt-2">Price: {pkg.price}</p>
              <Button type="primary" className="mt-4">Book Now</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Packages;