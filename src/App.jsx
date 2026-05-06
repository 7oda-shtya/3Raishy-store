import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import Categories from './pages/Categories';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ParticlesBackground from './components/ParticlesBackground';
import Liked from './pages/Liked';
import Cart from './pages/Cart';
import Login from './pages/acount/Login';
import SignUp from './pages/acount/SignUp';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/account/login' || location.pathname === '/account/signup';

  return (
    <div className={`relative min-h-screen overflow-x-hidden ${isLoginPage ? '' : 'pt-32 lg:pt-28'}`}>
      <ParticlesBackground />
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories/:categoryName" element={<Categories />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
