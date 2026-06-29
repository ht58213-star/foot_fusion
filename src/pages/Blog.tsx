import { CalendarDays, ArrowRight } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      title: "How to Choose the Perfect Running Shoes",
      excerpt: "Selecting the right running shoes can improve performance and reduce injuries. Look for proper cushioning, arch support, and breathable materials.",
      date: "June 15, 2026",
      img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Top Shoe Trends of 2026",
      excerpt: "This year brings minimalist designs, eco-friendly materials, and bold color combinations to the footwear industry.",
      date: "June 10, 2026",
      img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Tips to Make Your Shoes Last Longer",
      excerpt: "Clean regularly, store properly, avoid excessive moisture, and rotate pairs frequently to extend the lifespan of your favorite shoes.",
      date: "June 5, 2026",
      img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Why Comfortable Footwear Matters",
      excerpt: "Comfortable shoes improve posture, reduce fatigue, and support overall foot health. Discover why you shouldn't compromise.",
      date: "May 30, 2026",
      img: "https://images.unsplash.com/photo-1520256862584-1b44ee4f3b5c?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-28 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Latest Articles</h1>
        <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {articles.map((article, idx) => (
          <article key={idx} className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
            <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
              <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:w-3/5 flex flex-col justify-center">
              <div className="flex items-center text-sm text-indigo-600 mb-3 font-medium">
                <CalendarDays className="h-4 w-4 mr-2" />
                {article.date}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                <a href="#" className="hover:text-indigo-600 transition">{article.title}</a>
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-indigo-600 transition mt-auto">
                Read Article
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
