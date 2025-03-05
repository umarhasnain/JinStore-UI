import featuredProductData from '@/utils/featuredProduct';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
const FeaturedProductList = () => {
  return (
    <div>
       <div className="flex flex-wrap justify-between items-center mb-6 px-24 py-2">
        <div className='flex items-center gap-2 flex-wrap'>
          <h1 className="text-2xl font-bold text-gray-800">Featured Products</h1>
          <p className="text-sm text-gray-600">Do not miss the current offers until the end of March.</p>
        </div>
        <button className="bg-white text-black border-2 border-gray-200  px-4 py-1 rounded-3xl text-sm font-semibold hover:bg-purple-600 transition">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-20 justify-center">
     
     
     {featuredProductData.map((item, i) => (
       <div key={i} className="bg-white rounded-lg shadow-md px-4 py-8 relative border-gray rounded-md  w-[490px] h-[332px] mx-auto flex flex-row gap-2 ">
         {/* Image and Icons Container */}
         <div className="relative w-full flex justify-center">
           {/* Discount Badge */}
           <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
             {item.discount}%
           </div>
           {/* Wishlist Icon */}
           <div className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer">
           <FaRegHeart size={20} />
           </div>
           {/* Product Image */}
           <Image src={item.image} alt={item.name} width={183} height={243} className="object-contain w-[183px] h-[243px]" />
         </div>
         
         {/* Product Info */}
         <div className=" w-full mt-4 px-2 flex flex-col gap-3">
           <h3 className="text-gray-800 font-semibold text-sm">{item.name}</h3>
           <div className="flex items-start justify-start mt-1 gap-2">
             <span className="text-red-500 font-bold text-lg">${item.price}</span>
             <span className="text-gray-400 line-through ml-2">${item.originalPrice}</span>
           </div>
           {/* Ratings */}
           <div className="flex items-center justify-start text-yellow-400 text-xs mt-1">
             {'⭐'.repeat(item.rating)}
             <span className="text-gray-500 ml-1 text-xs">({item.reviews})</span>
           </div>
           {/* Add to Cart Button */}
           <button className="mt-3 bg-white border rounded-[30px] border-purple-500 text-purple-500 font-semibold rounded-lg py-1 w-full flex justify-between px-4 items-center hover:bg-purple-500 hover:text-white transition">
             Add to cart
             <span className="ml-2 text-lg">➕</span>
           </button>
           {/* Offer Timer */}
           <p className="text-gray-500 text-xs mt-2">Remains until the end of the offer</p>
         </div>
       </div>
     ))}
   </div>
    </div>
   
  );
};

export default FeaturedProductList;
