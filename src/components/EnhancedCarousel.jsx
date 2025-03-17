import { useEffect, useState } from "react";

const images = [
    {
        id: 1,
        url: 'https://media.istockphoto.com/id/1317323736/fr/photo/une-vue-vers-le-haut-dans-le-ciel-de-direction-darbres.webp?a=1&b=1&s=612x612&w=0&k=20&c=nWL9gHGP0VrVte8Swc7M9P-nNebXe8vd8gIUScq6GBs=',
        title: 'Nature'
    },
    {
        id: 2,
        url: 'https://media.istockphoto.com/id/1284786722/fr/photo/beaux-arbres-dans-la-for%C3%AAt-automnale.webp?a=1&b=1&s=612x612&w=0&k=20&c=43pecVRunHNsq7LFIm4-Rlw4bT1frp5kfAZ_MoEfDyI=',
        title: 'Forêt'
    },
    {
        id: 3,
        url: 'https://plus.unsplash.com/premium_photo-1674834298045-e405bc99076b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2llbHxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Ciel'
    },
    {
        id: 4,
        url: 'https://media.istockphoto.com/id/1973224069/fr/photo/refreshing-kuang-si-waterfall-in-the-jungles.webp?a=1&b=1&s=612x612&w=0&k=20&c=qU_-7JZsjYIH8FkUiaYRODp7r1iquokli5gYQkcqMs4=',
        title: 'Chute d\'eau'
    },
    {
        id: 5,
        url: 'https://media.istockphoto.com/id/2057429544/fr/photo/vue-estivale-color%C3%A9e-du-lac-blanc-avec-le-mont-blanc-en-arri%C3%A8re-plan-emplacement-%C3%A0-chamonix.webp?a=1&b=1&s=612x612&w=0&k=20&c=8QgDyQ4jl9Ef3smZ7gS59AtnZxP2kRupSaT3fS8lBrg=',
        title: 'Montages'
    }
];

const EnhancedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
    }, 500);
  }
  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length -1 : prevIndex -1)
        setFade(true);
    }, 500);
  }

  useEffect(() => {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="relative max-w-[600px] mx-auto p-5 w-full">
        <div className="relative aspect-[16/9]">
            {images.map((image, index) => (
                <img 
                    src={image.url} 
                    alt={image.title} 
                    key={image.id} 
                    className={`absolute inset-0 w-full h-full object-cover rounded-lg duration-500 
                        ${index === currentIndex ? (fade ? "opacity-100": "opacity-0"): ("opacity-0")}`}
                />
            ))}
        </div>
        {/* Titre */}
        <div className="text-center text-lg font-semibold mt-2">
            {images[currentIndex].title}
        </div>

        {/* Boutons */}
        <button onClick={prevSlide} 
            className="absolute transform -translate-y-1/2 left-6 top-1/2 bg-gray-700 hover:bg-gray-900 text-white p-3 rounded-full">
                &#10094;
        </button>
        <button onClick={nextSlide}
            className="absolute transform -translate-y-1/2 right-6 top-1/2 bg-gray-700 hover:bg-gray-900 text-white p-3 rounded-full">
                &#10095;
        </button>

        {/* Indicateurs */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
                <div key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-black': 'bg-gray-400'}`}></div>
            ))}
        </div>
    </div>
  )
}
export default EnhancedCarousel;