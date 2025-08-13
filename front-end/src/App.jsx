import { useState, useEffect } from "react";
import MainPage from './pages/MainPage';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return <MainPage />;
}

export default App;
