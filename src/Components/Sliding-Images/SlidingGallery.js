import React, { useState, useEffect } from "react";
import style from './SlidingGallery.module.css'
import GalleryText from "./GalleryText";

const SlidingGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { id: 1, src: "//icms-image.slatic.net/images/ims-web/09a474c7-0ccc-4ceb-b730-c3f392971cdd.jpeg" },
        { id: 2, src: "//icms-image.slatic.net/images/ims-web/c33f5c46-58f1-4805-a99e-fcc80df128b6.jpg" },
        { id: 3, src: "//icms-image.slatic.net/images/ims-web/f3588389-7d00-43a2-a4ed-4ae1b8834e14.jpg" },
        { id: 4, src: "https://elements-cover-images-0.imgix.net/b3649b58-ae58-4fa7-a142-827052e63257?auto=compress&h=630&w=1200&fit=crop&crop=edges&fm=jpeg&s=a6092cd59bb199b88de94b613eac10a4", alt: "Image 4" },
        { id: 5, src: "//icms-image.slatic.net/images/ims-web/8a6a0a5e-a8c8-4b54-ba2a-3d5ada8ffd16.jpg_1200x1200.jpg", alt: "Image 5" },
        { id: 6, src: "//icms-image.slatic.net/images/ims-web/e882176b-9c4f-41dd-b2d6-83026140adbd.jpg", alt: "Image 6" },
        { id: 7, src: " //icms-image.slatic.net/images/ims-web/91e6f7b7-2f10-45a6-a112-1fef99b27c07.jpg" },
        { id: 8, src: "//icms-image.slatic.net/images/ims-web/236eb266-52d8-4fb0-8f38-8ff046c84e26.jpg" }
    ];
    const intervalTime = 4000;

    useEffect(() => {
        const interval = setInterval(() => {
            moveSlide(1);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const moveSlide = (direction) => {
        const numSlides = slides.length;
        setCurrentIndex((prevIndex) => (prevIndex + direction + numSlides) % numSlides);
    };
    const prevSlide = () => {
        moveSlide(-1);
    };

    const nextSlide = () => {
        moveSlide(1);
    };
    return (
        <div className={style.gallery}>
            <GalleryText />
            <button onClick={prevSlide}>{'<'} </button>
            <div className={style["carousel-container"]}>
                <div className={style["carousel-track"]} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map(slide => (
                        <div className={style["carousel-item"]} key={slide.id}>
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={nextSlide}>{'>'}</button>
        </div>
    );
}

export default SlidingGallery;
