
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/screens/LandingPage/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MyNotes from './components/screens/MyNotes/MyNotes';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/mynotes' element={<MyNotes />} />
      </Routes>
      <LandingPage/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
