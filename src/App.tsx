import { useEffect } from 'react';
import { I18nProvider } from './contexts/I18nContext';
import Home from './pages/Home';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Redirect da antoniosantese.com a asyntes.com
    if (window.location.hostname === 'antoniosantese.com') {
      window.location.replace('https://asyntes.com' + window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <I18nProvider>
      <div className="App">
        <Home />
      </div>
    </I18nProvider>
  );
}

export default App;