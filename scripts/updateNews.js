const fs = require('fs');
const path = require('path');

// Your GNews API key
const API_KEY = '320b570a616b655b22c1074a314d65a5'; 
const NEWS_FILE_PATH = path.join(__dirname, '..', 'data', 'news.json');

async function fetchArticles() {
  // Use the exact keywords you specified
  const keywords = [
    'jobs', 'employment', 'unemployment', 
    'hiring', 'placements', 'internship', 'freshers', 
    'coding', 'apprenticeships', 'layoffs'
  ];

  // Create a query string
  const query = keywords.join(' OR ');
  
  // Construct the URL with encoded query and category filters
  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&country=in&max=20&sortby=publishedAt&token=${API_KEY}&topic=politics,education,technology,science&exclude=horoscope,entertainment`;
  
  console.log('Fetching articles with query:', url);
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorResponse = await response.text();
      throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText} - ${errorResponse}`);
    }

    const result = await response.json();

    let articles = result.articles || [];

    // Custom deduplication based on first 6 words of title
    const seenTitleStarts = new Set();
    const uniqueArticles = articles.filter(article => {
      // Get first 6 words of the title
      const titleStart = article.title.split(' ').slice(0, 6).join(' ').toLowerCase();
      
      // If we haven't seen this title start before, keep the article
      if (!seenTitleStarts.has(titleStart)) {
        seenTitleStarts.add(titleStart);
        return true;
      }
      return false;
    });

    // Enhanced logging for article content
    console.log(`Fetched ${uniqueArticles.length} unique articles`);
    uniqueArticles.forEach((article, index) => {
      console.log(`Article ${index + 1}: 
        Title: ${article.title}
        Source: ${article.source.name}
        URL: ${article.url}`);
    });

    return uniqueArticles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}

async function updateNews() {
  let data = { date: '', articles: [] };
  const today = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD

  // Read existing data if available
  if (fs.existsSync(NEWS_FILE_PATH)) {
    try {
      const rawData = fs.readFileSync(NEWS_FILE_PATH, 'utf8');
      if (rawData) {
        data = JSON.parse(rawData);
      }
    } catch (parseError) {
      console.error('Error parsing news.json:', parseError);
      // If JSON is corrupted, reset the data
      data = { date: today, articles: [] };
    }
  }

  if (data.date !== today) {
    console.log('New day detected, resetting articles.');
    data = { date: today, articles: [] };
  }

  // Fetch articles
  try {
    const newArticles = await fetchArticles();
    
    // Combine and deduplicate articles
    const combinedArticles = [...newArticles, ...data.articles];
    const uniqueArticles = Array.from(new Map(
      combinedArticles.map(article => [article.url, article])
    ).values());

    data.articles = uniqueArticles;
  } catch (error) {
    console.error('Error fetching articles:', error);
  }

  // Limit to 240 articles max
  if (data.articles.length > 240) {
    data.articles = data.articles.slice(0, 240);
  }

  // Write updated data back to news.json
  try {
    fs.writeFileSync(NEWS_FILE_PATH, JSON.stringify(data, null, 2));
    console.log('News updated successfully.');
  } catch (writeError) {
    console.error('Error writing to news.json:', writeError);
  }
}

// Run the update process
updateNews().catch(err => {
  console.error('Error updating news:', err);
  process.exit(1);
});