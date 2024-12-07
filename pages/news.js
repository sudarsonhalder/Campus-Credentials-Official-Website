// pages/news.js
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'news.json');
  let data = { date: '', articles: [] };

  if (fs.existsSync(filePath)) {
    const rawData = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(rawData);
  }

  return {
    props: {
      date: data.date,
      articles: data.articles
    }
  };
}

// Function to format date 
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  // Add ordinal suffix to day
  const dayWithSuffix = day + (day % 10 === 1 && day !== 11 ? 'st' :
    day % 10 === 2 && day !== 12 ? 'nd' :
    day % 10 === 3 && day !== 13 ? 'rd' : 'th');

  return `${dayWithSuffix} ${month}, ${year}`;
}

export default function NewsPage({ date, articles }) {
  const formattedDate = formatDate(date);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-left">
          News and Updates for {formattedDate}
        </h1>
        
        {articles.length === 0 ? (
          <p className="text-gray-600 text-center">No articles available at the moment. Please check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl group transition-shadow duration-300 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                {article.image && (
                  <div className="w-full h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {article.description}
                  </p>
                  {/* Added Source Section */}
                  <div className="text-xs text-gray-500 mb-2">
                    Source: {article.source.name || 'Unknown Source'}
                  </div>
                  <Link 
                    href={article.url} 
                    target="_blank" 
                    rel="noreferrer" 
                  >
                    <button className="w-full sm:w-auto inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
