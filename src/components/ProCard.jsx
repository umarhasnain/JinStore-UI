import Image from "next/image";
import { FaStar, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white w-80 relative">
      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {product.discount}%
        </span>
      )}

      {/* Wishlist Icon */}
      <FaRegHeart className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer" size={18} />

      {/* Product Image */}
      <div className="flex justify-center">
        <Image src={product.image} alt={product.name} width={120} height={120} className="object-contain" />
      </div>

      {/* Product Name */}
      <h3 className="text-gray-800 font-medium text-sm mt-3">{product.name}</h3>

      {/* Price */}
      <div className="flex items-center mt-2">
        <span className="text-red-600 font-bold text-lg">${product.price}</span>
        {product.oldPrice && (
          <span className="text-gray-400 text-sm line-through ml-2">${product.oldPrice}</span>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center text-yellow-500 mt-1">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} size={14} className={index < product.rating ? "text-yellow-400" : "text-gray-300"} />
        ))}
        <span className="text-gray-500 text-xs ml-1">{product.reviews}</span>
      </div>

      {/* Add to Cart Button */}
      <button className="mt-3 w-full border rounded-lg py-2 text-purple-600 border-purple-500 flex items-center justify-center space-x-2 hover:bg-purple-50">
        Add to cart <span className="text-lg">+</span>
      </button>

      {/* Offer Countdown */}
      <p className="text-gray-400 text-xs mt-2">Remains until the end of the offer</p>

      {/* Organic Label */}
      {product.organic && (
        <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          🌱 ORGANIC
        </span>
      )}
    </div>
  );
};

export default ProductCard;
