import '@fontsource/poppins'
import './index.css'
import ReactDOM from 'react-dom/client'
import PlayerProvider from './contexts/PlayerProvider.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PlayerProvider>
    <App />
  </PlayerProvider>
)
