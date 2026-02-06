"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const bannerImages = [
    "/hero-banners/image1.jpeg",
    "/hero-banners/image2.jpeg",
    "/hero-banners/image3.jpeg",
    "/hero-banners/image4.jpeg",
    "/hero-banners/image5.jpeg",
    "/hero-banners/image6.jpeg",
];

const ImageSliderSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    };

    return (
        <section className="relative w-full py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">Our Gallery</h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
                        Glimpses of our impactful journey and community service.
                    </p>
                </div>

                <div className="relative w-full max-w-8xl mx-auto h-[250px] sm:h-[350px] md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl group">
                    {bannerImages.map((img, index) => (
                        <div
                            key={img}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            {/* Optional overlay for better text contrast if needed later, currently transparent */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                        </div>
                    ))}

                    {/* Navigation Arrows */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevSlide}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-8 h-8 md:w-10 md:h-10 p-0 shadow-lg backdrop-blur-sm transition-all z-10"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-8 h-8 md:w-10 md:h-10 p-0 shadow-lg backdrop-blur-sm transition-all z-10"
                    >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                    </Button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {bannerImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? "bg-red-600 w-6" : "bg-red-300 hover:bg-red-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageSliderSection;
