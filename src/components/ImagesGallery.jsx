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
    }
];

const ImagesGallery = () => {
  
    
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 p-5">
        {images.map((image) => (
            <div key={image.id} className="border rounded-lg shadow-lg overflow-hidden">
                <img src={image.url} alt={image.title} className="w-full h-60 object-cover" />
                <div className="p-2 text-center bg-gray-700 text-white">
                    {image.title}
                </div>
            </div>
        ))}
    </div>
  )
}
export default ImagesGallery