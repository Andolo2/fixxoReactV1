
import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView'
import ContactView  from './views/ContactView';
import ProductView from './views/ProductView'
import NotFoundView from './views/NotFoundView';




function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='ContactView' element={<ContactView />} />
        <Route path='ProductView' element={<ProductView />} />
        <Route path='*' element={<NotFoundView />} />
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;

