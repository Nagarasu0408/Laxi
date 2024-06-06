// SliderComponent.jsx
import React, { useState } from 'react';
import './SearchBox.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b4e41a670c097c8fd2834579f5d5958&auto=format&fit=crop&w=633&q=80',
    name: 'Marie Edwards',
    title: 'Web Designer',
  },
  {
    image: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=49899e285952107fdfd9415b8d3bf74a&auto=format&fit=crop&w=634&q=80',
    name: 'Kelly Woods',
    title: 'Web Designer',
  },
  {
    image: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-0.3.5&s=739aef35459daa8aaeaa55363d492bc1&auto=format&fit=crop&w=673&q=80',
    name: 'Roger Rice',
    title: 'Web Designer',
  },
  {
    image: 'https://images.unsplash.com/photo-1502768040783-423da5fd5fa0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c6416353c255d2746a68c8a83943bdf&auto=format&fit=crop&w=634&q=80',
    name: 'Jessica Garcia',
    title: 'Web Designer',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a138cf8acd85036bd292d7f10074e79&auto=format&fit=crop&w=634&q=80',
    name: 'Sean Adams',
    title: 'Web Designer',
  },
  {
    image: 'https://images.unsplash.com/photo-1500080209535-717dd4ebaa6b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddee81e2e574e8190b07139ddb0f1938&auto=format&fit=crop&w=687&q=80',
    name: 'Crystal Davidson',
    title: 'Web Designer',
  },
];

const SearchBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className='body'>
      <div className="slider-container">
        <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="picture">
                <img src={slide.image} alt={slide.name} />
              </div>
              <div className="detail">
                <h3>{slide.name}</h3>
                <span>{slide.title}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={handlePrev}>Prev</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default SearchBox;
