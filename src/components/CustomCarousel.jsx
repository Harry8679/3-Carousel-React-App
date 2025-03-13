import { useState, useEffect } from "react";

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

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length -1 : prevIndex -1)
  }

//   useEffect(() => {
//     const interval = setInterval(() => {
//         console.log('Hello World');
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative max-w-2xl mx-auto p-5">
        <div className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
            <img src={images[currentIndex].url} alt={images[currentIndex].title} className="w-full h-full object-cover" />
        </div>
        <div className="mt-2 text-center font-semibold text-lg">
            {images[currentIndex].title}
        </div>
        <button onClick={prevSlide} 
            className="absolute transform -translate-y-1/2 left-6 top-1/2 bg-gray-700 hover:bg-gray-900 text-white p-3 rounded-full">
                &#10094;
        </button>
        <button onClick={nextSlide}
            className="absolute transform -translate-y-1/2 right-6 top-1/2 bg-gray-700 hover:bg-gray-900 text-white p-3 rounded-full">
                &#10095;
        </button>
    </div>
  )
}
export default CustomCarousel