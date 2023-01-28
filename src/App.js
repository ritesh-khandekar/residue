// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contractor from './website/Contractor';
import Navbar from './website/navbar/Navbar';
// import Sidebar2 from './website/sidebar/Sidebar2';

function App() {
  return (
    <>
    <Navbar />
      <Routes >
        <Route path='/contractor' element={<Contractor />} />
      </Routes>
    </>
  );
}

export default App;
