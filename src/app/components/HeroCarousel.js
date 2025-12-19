'use client';

import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const slides = [
    {
      id: 0,
      name: 'Taj Mahal',
      gradient: ['#fff9e6', '#ffeb3b', '#ffc107', '#ff9800', '#ff6600', '#e65100'],
      sunPosition: { top: '15%', left: '55%' },
      primaryLandmark: 'taj',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop&q=80'
    },
    {
      id: 1,
      name: 'Gateway of India',
      gradient: ['#e3f2fd', '#64b5f6', '#42a5f5', '#2196f3', '#1976d2', '#0d47a1'],
      sunPosition: { top: '18%', left: '25%' },
      primaryLandmark: 'gateway',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'India Gate',
      gradient: ['#f3e5f5', '#ba68c8', '#ab47bc', '#9c27b0', '#7b1fa2', '#4a148c'],
      sunPosition: { top: '12%', left: '70%' },
      primaryLandmark: 'indiagate',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Parliament House',
      gradient: ['#e8f5e9', '#81c784', '#66bb6a', '#4caf50', '#388e3c', '#1b5e20'],
      sunPosition: { top: '20%', left: '60%' },
      primaryLandmark: 'parliament',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'Qutub Minar',
      gradient: ['#fff3e0', '#ffb74d', '#ffa726', '#ff9800', '#f57c00', '#e65100'],
      sunPosition: { top: '14%', left: '45%' },
      primaryLandmark: 'qutub',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436e8e2f?w=1200&h=600&fit=crop&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSliding) {
        goToSlide((currentSlide + 1) % slides.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isSliding, slides.length]);

  const goToSlide = (index) => {
    if (isSliding || index === currentSlide) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsSliding(false);
    }, 800);
  };

  const renderSlide = (slideData, isMain = false) => {
    const sunStyle = {
      position: 'absolute',
      top: isMain ? slideData.sunPosition.top : '20%',
      left: isMain ? slideData.sunPosition.left : '50%',
      width: isMain ? '120px' : '60px',
      height: isMain ? '120px' : '60px',
      background: 'white',
      borderRadius: '50%',
      boxShadow: isMain 
        ? '0 0 60px rgba(255, 255, 255, 0.8), 0 0 120px rgba(255, 255, 255, 0.5)'
        : '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.3)',
      zIndex: 1,
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    };

    const gradientString = `linear-gradient(to bottom, ${slideData.gradient[0]} 0%, ${slideData.gradient[1]} 15%, ${slideData.gradient[2]} 35%, ${slideData.gradient[3]} 60%, ${slideData.gradient[4]} 85%, ${slideData.gradient[5]} 100%)`;

    return (
      <div 
        className={`hero-slide-item ${isMain ? 'main-slide' : 'preview-slide'}`}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <div 
          className="hero-gradient"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            background: gradientString,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            transition: 'background 0.8s ease'
          }}
        >
          {/* Job-related background image */}
          <img
            src={slideData.image}
            alt={slideData.name}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.4,
              mixBlendMode: 'overlay',
              zIndex: 0,
              transition: 'opacity 0.8s ease'
            }}
            loading="lazy"
          />
          <div className="hero-sun" style={sunStyle}></div>
          <svg 
            className="hero-skyline" 
            viewBox="0 0 1200 300" 
            preserveAspectRatio="xMidYMax meet"
            style={{
              width: '100%',
              height: '60%',
              position: 'absolute',
              bottom: 0,
              left: 0,
              zIndex: 2,
              transition: 'opacity 0.8s ease'
            }}
          >
            {/* Gateway of India */}
            <g transform="translate(50, 150)" opacity={slideData.primaryLandmark === 'gateway' ? 1 : 0.6}>
              <rect x="0" y="0" width="80" height="120" fill="#000"/>
              <path d="M 20 0 L 40 0 L 50 20 L 30 20 Z" fill="#000"/>
              <rect x="15" y="20" width="50" height="100" fill="#000"/>
              <path d="M 15 20 Q 40 0 65 20" stroke="#000" strokeWidth="3" fill="none"/>
              <rect x="30" y="40" width="20" height="60" fill="#000"/>
            </g>
            
            {/* Taj Mahal */}
            <g transform="translate(400, 100)" opacity={slideData.primaryLandmark === 'taj' ? 1 : 0.6}>
              <rect x="0" y="80" width="200" height="40" fill="#000"/>
              <circle cx="100" cy="80" r="50" fill="#000"/>
              <rect x="90" y="30" width="20" height="50" fill="#000"/>
              <circle cx="30" cy="100" r="25" fill="#000"/>
              <circle cx="170" cy="100" r="25" fill="#000"/>
              <rect x="15" y="100" width="30" height="80" fill="#000"/>
              <rect x="155" y="100" width="30" height="80" fill="#000"/>
            </g>
            
            {/* Parliament House */}
            <g transform="translate(700, 120)" opacity={slideData.primaryLandmark === 'parliament' ? 1 : 0.6}>
              <rect x="0" y="60" width="150" height="60" fill="#000"/>
              <circle cx="75" cy="60" r="40" fill="#000"/>
              <rect x="60" y="20" width="30" height="40" fill="#000"/>
              <polygon points="60,20 75,0 90,20" fill="#000"/>
            </g>
            
            {/* India Gate */}
            <g transform="translate(900, 100)" opacity={slideData.primaryLandmark === 'indiagate' ? 1 : 0.6}>
              <rect x="0" y="80" width="100" height="100" fill="#000"/>
              <path d="M 0 80 Q 50 40 100 80" stroke="#000" strokeWidth="8" fill="none"/>
              <rect x="40" y="80" width="20" height="100" fill="#000"/>
            </g>
            
            {/* Qutub Minar */}
            <g transform="translate(1050, 80)" opacity={slideData.primaryLandmark === 'qutub' ? 1 : 0.6}>
              <rect x="0" y="100" width="40" height="100" fill="#000"/>
              <rect x="5" y="60" width="30" height="40" fill="#000"/>
              <rect x="10" y="40" width="20" height="20" fill="#000"/>
              <rect x="15" y="20" width="10" height="20" fill="#000"/>
            </g>
          </svg>
        </div>
      </div>
    );
  };

  // Get next 3 slides for preview
  const getNextSlides = () => {
    const nextSlides = [];
    for (let i = 1; i <= 3; i++) {
      const index = (currentSlide + i) % slides.length;
      nextSlides.push(slides[index]);
    }
    return nextSlides;
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="hero-carousel-container">
      <div className="container">
        <div className="hero-carousel-wrapper">
          {/* Main Slide - 70% width */}
          <div className="main-slide-container">
            <div 
              className={`main-slide-wrapper ${isSliding ? 'sliding-out' : ''}`}
              style={{
                transform: `translateX(${isSliding ? '-100%' : '0%'})`,
                transition: isSliding ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                opacity: isSliding ? 0 : 1
              }}
            >
              {renderSlide(currentSlideData, true)}
            </div>
          </div>

          {/* Preview Slides - 30% width, divided into 3 */}
          <div className="preview-slides-container">
            {getNextSlides().map((slideData, idx) => (
              <div 
                key={`preview-${slideData.id}-${currentSlide}`}
                className={`preview-item ${idx === 0 && isSliding ? 'sliding-to-main' : ''}`}
                onClick={() => goToSlide(slideData.id)}
                style={{
                  cursor: 'pointer',
                  opacity: idx === 0 && isSliding ? 1 : 0.7,
                  transition: idx === 0 && isSliding 
                    ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease' 
                    : 'opacity 0.3s ease, transform 0.3s ease',
                  transform: idx === 0 && isSliding ? 'translateX(-100%) scale(1)' : 'scale(1)',
                  zIndex: idx === 0 && isSliding ? 10 : 1,
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  if (!isSliding) {
                    e.currentTarget.style.opacity = '0.9';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSliding) {
                    e.currentTarget.style.opacity = '0.7';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                {renderSlide(slideData, false)}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="hero-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={currentSlide === index ? 'active' : ''}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}: ${slide.name}`}
              title={slide.name}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
