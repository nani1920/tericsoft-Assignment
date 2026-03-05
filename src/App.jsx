import { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dragonball-api.com/api/characters?limit=12');
      if (!response.ok) {
        throw new Error('Failed to summon characters. Power levels are too low!');
      }
      const data = await response.json();
      // The API returns an items array
      setCharacters(data.items || []);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Dragon Ball Z Gallery</h1>
        <p>Explore the ultimate power levels of the universe</p>
      </header>

      <main>
        {loading && <Loader />}
        {error && <ErrorMessage message={error} onRetry={fetchCharacters} />}
        {!loading && !error && <CharacterList characters={characters} />}
      </main>
    </div>
  );
}

export default App;
