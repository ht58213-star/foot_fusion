export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-28">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">About FootFusion</h1>
        <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
      </div>
      
      <div className="prose prose-lg mx-auto text-gray-600">
        <p className="text-xl leading-relaxed mb-8">
          Founded with a passion for innovation and style, FootFusion is dedicated to creating footwear that combines fashion, comfort, and durability.
        </p>
        
        <p className="mb-12">
          We believe shoes are more than accessories—they are a part of your journey. Our team works tirelessly to design footwear that supports your lifestyle while reflecting your personality.
        </p>

        <img 
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&auto=format&fit=crop&q=60" 
          alt="Shoe Craftsmanship" 
          className="rounded-2xl shadow-lg mb-16 w-full h-80 object-cover"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p>
              To provide high-quality footwear that empowers people to move confidently and comfortably every day.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p>
              To become a globally trusted footwear brand known for innovation, sustainability, and customer satisfaction.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-indigo-50 p-10 rounded-2xl border border-indigo-100 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Values</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 font-medium text-indigo-900">
            <li className="bg-white py-3 rounded shadow-sm">Quality First</li>
            <li className="bg-white py-3 rounded shadow-sm">Customer Satisfaction</li>
            <li className="bg-white py-3 rounded shadow-sm">Innovation</li>
            <li className="bg-white py-3 rounded shadow-sm">Sustainability</li>
            <li className="bg-white py-3 rounded shadow-sm md:col-span-1 col-span-2">Integrity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
