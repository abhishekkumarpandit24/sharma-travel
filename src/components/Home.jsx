import React from 'react';
import { Carousel, Button, Row, Col, Card } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Home = () => {
    const { Meta } = Card;
    // Slide data array
    const slides = [
        {
            image: './taj.jpg',  // Image URL
            title: 'Explore the World',
            description: 'Start your adventure with us today!',
            buttonText: 'Plan Your Trip',
        },
        {
            image: './mountain.jpg',
            title: 'Unforgettable Journeys',
            description: 'Tailored travel experiences for every explorer.',
            buttonText: 'Book Now',
        },
        // Add more slides as needed
    ];

    return (
            <Carousel
                autoplay
                prevArrow={<LeftOutlined style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.65)', left: '20px' }} />}
                nextArrow={<RightOutlined style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.65)', right: '20px' }} />}
                style={{ position: 'relative' }}
            >
                {/* Dynamically render slides */}
                {slides.map((slide, index) => (
                    <div key={index} className="hero-slide bg-cover bg-center text-white" style={{ backgroundImage: `url(${slide.image})`, position: 'relative' }}>
                        {/* <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div> */}
                        <div className="container mx-auto p-20 text-center relative">
                            <Row justify="center">
                                <Col xs={24} sm={20} md={18} lg={12}>
                                    {/* <h1 className="text-4xl font-bold">{slide.title}</h1>
                  <p className="mt-4 text-lg">{slide.description}</p>
                  <Button type="primary" size="large" className="mt-6">{slide.buttonText}</Button> */}
                                    <Card
                                        cover={
                                            <img
                                                alt={slide.title}
                                                src={slide.image}
                                                style={{
                                                    width: '100%',          // Ensures it stretches to fill the container
                                                    height: '300px',        // Fixed height
                                                    objectFit: 'cover',     // Maintains aspect ratio, cropping if necessary
                                                    borderRadius: '8px'
                                                }}
                                            />
                                        }
                                        style={{
                                            margin: '20px auto',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        <Meta title={slide.title} description={slide.description} />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                ))}
            </Carousel>
    );
};

export default Home;
