import { useState } from 'react';
import './App.css';

// Collection of motivational quotes
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett" },
  { text: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "In this life we cannot do great things. We can only do small things with great love.", author: "Mother Teresa" }
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [quoteKey, setQuoteKey] = useState(0);

  // Get a random quote different from the current one
  const getNewQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === currentQuote && quotes.length > 1);
    setCurrentQuote(newQuote);
    setQuoteKey(prev => prev + 1);
  };

  const shareQuote = () => {
    const text = `"${currentQuote.text}" - ${currentQuote.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Daily Motivation</h1>
      </header>

      <main className="app-main">
        <div className="quote-card" aria-live="polite" aria-atomic="true" key={quoteKey}>
          <blockquote className="quote-text">
            "{currentQuote.text}"
          </blockquote>
          <p className="quote-author">— {currentQuote.author}</p>
        </div>

        <div className="button-group">
          <button 
            className="btn btn-primary" 
            onClick={getNewQuote}
            aria-label="Get a new motivational quote"
          >
            New Quote
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={shareQuote}
            aria-label="Share this quote on Twitter"
          >
            Share on Twitter
          </button>
        </div>
      </main>

      <footer className="app-footer">
        <p>Find inspiration every day</p>
      </footer>
    </div>
  );
}

export default App;
