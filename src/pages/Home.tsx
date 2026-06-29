import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Zap, Wind, Leaf } from 'lucide-react';

export default function Home() {
  const reviews = [
    {
      text: "FootFusion shoes are incredibly comfortable and stylish. Highly recommended!",
      author: "Rahul Sharma",
      rating: 5
    },
    {
      text: "Perfect fit and excellent quality.",
      author: "Priya Verma",
      rating: 5
    }
  ];

  const products = [
    { name: "Urban Runner", desc: "Lightweight running shoes designed for speed and comfort.", price: "₹2,999", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60" },
    { name: "Street Flex", desc: "Casual sneakers perfect for everyday wear.", price: "₹2,499", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60" },
    { name: "Mountain Trek", desc: "Rugged outdoor shoes built for adventure.", price: "₹3,999", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=60" },
    { name: "Aero Glide", desc: "Ultra-lightweight running shoes with maximum energy return.", price: "₹3,499", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600&auto=format&fit=crop&q=80" alt="Shoes Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Step Into Style with FootFusion
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 mx-auto mb-10">
            Discover premium footwear designed for comfort, performance, and fashion. Whether you're running, walking, working, or making a statement, FootFusion has the perfect pair for every journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-indigo-600 border border-transparent text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-indigo-700 transition shadow-lg">
              Shop Now
            </Link>
            <Link to="/products" className="bg-white text-gray-900 border border-transparent px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-50 transition shadow-lg">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Choose FootFusion?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-6">
                <ShieldCheck className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Crafted with durable materials for long-lasting comfort.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-6">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Design</h3>
              <p className="text-gray-600">Trendy styles that complement every outfit.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-6">
                <Wind className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Breathable Comfort</h3>
              <p className="text-gray-600">Engineered for all-day wear and support.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-6">
                <Leaf className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly Materials</h3>
              <p className="text-gray-600">Committed to sustainable footwear solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-br from-indigo-50/50 via-gray-50 to-purple-50/50 relative overflow-hidden">
        {/* Background blobs for glass effect contrast */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.name} className="backdrop-blur-xl bg-white/60 hover:bg-white/80 border border-white/60 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col group">
                <div className="h-64 overflow-hidden relative">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 mb-4 text-sm flex-grow">{product.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-indigo-600">{product.price}</span>
                    <button className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
                <div className="flex justify-center text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic mb-6">"{review.text}"</p>
                <p className="font-bold text-gray-900">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
