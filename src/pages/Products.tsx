import { CheckCircle2 } from 'lucide-react';

export default function Products() {
  const collection = [
    {
      category: "Running Shoes",
      name: "FootFusion Sprint Pro",
      features: ["Lightweight mesh upper", "Cushioned sole", "Breathable design"],
      price: "₹3,299",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60"
    },
    {
      category: "Casual Sneakers",
      name: "FootFusion Street Edge",
      features: ["Modern streetwear style", "Soft inner cushioning", "Flexible sole"],
      price: "₹2,799",
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60"
    },
    {
      category: "Sports Shoes",
      name: "FootFusion Active Max",
      features: ["High-performance grip", "Shock absorption", "Athletic design"],
      price: "₹3,599",
      img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=60"
    },
    {
      category: "Hiking Shoes",
      name: "FootFusion Trail Master",
      features: ["Water-resistant material", "Heavy-duty grip", "Outdoor durability"],
      price: "₹5,499",
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=60"
    },
    {
      category: "Casual Sneakers",
      name: "FootFusion Urban Slip-On",
      features: ["No-tie convenience", "Memory foam insole", "Stretchy fit"],
      price: "₹1,999",
      img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&auto=format&fit=crop&q=60"
    },
    {
      category: "Running Shoes",
      name: "FootFusion Aero Glide",
      features: ["Ultra-lightweight", "Energy return foam", "Seamless knit upper"],
      price: "₹3,499",
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60"
    },
    {
      category: "Sports Shoes",
      name: "FootFusion Court Classic",
      features: ["Retro style", "Durable cupsole", "Perforated toe"],
      price: "₹2,899",
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50/70 via-gray-50 to-purple-50/70 py-20 pb-28 min-h-screen relative overflow-hidden">
      {/* Decorative blurred backgrounds for glass effect */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Our Collection</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {collection.map((item) => (
            <div key={item.name} className="backdrop-blur-xl bg-white/70 hover:bg-white/90 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 rounded-2xl overflow-hidden flex flex-col group">
              <div className="h-72 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-wider rounded-full shadow text-gray-800 z-10 transition">
                  {item.category}
                </div>
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{item.name}</h2>
                <ul className="space-y-3 mb-8 flex-grow">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-end justify-between pt-6 border-t border-gray-100 mt-auto">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Price</p>
                    <span className="text-3xl font-extrabold text-indigo-600">{item.price}</span>
                  </div>
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 transition shadow-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
