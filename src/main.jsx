import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthProvider';
createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <App />
    </AuthProvider>
    <Toaster
      position='top-right'
      reverseOrder={false}
      toastOptions={{
        duration: 2000,
      }}
    />
  </>
);
