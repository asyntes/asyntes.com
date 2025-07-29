import { I18nProvider } from './contexts/I18nContext';
import Home from './pages/Home';
import './styles/globals.css';

function App() {
  return (
    <I18nProvider>
      <div className="App">
        <Home />
      </div>
    </I18nProvider>
  );
}

export default App;