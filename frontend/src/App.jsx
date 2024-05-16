import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Stocks } from './pages/Stocks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* login */}
        <Route path="/login" element={<Login />} />
        {/* signup */}
        <Route path="/signup" element={<Signup />} />
        {/* Stocks */}
        <Route path="/stocks" element={<Stocks/>} />
        {/* not found */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
