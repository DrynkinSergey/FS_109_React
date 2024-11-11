import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Toaster
      position='top-center'
      reverseOrder={false}
      toastOptions={{
        // Define default options
        className: '',
        duration: 2000,
        style: {
          background: '#363636',
          color: '#fff',
        },

        // Default options for specific types
        success: {
          duration: 1000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
  </>
);
