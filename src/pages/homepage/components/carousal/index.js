import React, { useState } from 'react';

const Carousal = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    const scrollPrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousal-container">
            <img
                src={images[currentIndex]}
                alt={`carousel-image-${currentIndex}`}
                style={{ width: '100%', height: '100%' }}
            />
            {/* Arrow buttons */}
            <div className="prev-arrow" onClick={scrollPrev}>{"<"}</div>
            <div className="next-arrow" onClick={scrollNext}>{">"}</div>
        </div>
    );
}

export default Carousal;
