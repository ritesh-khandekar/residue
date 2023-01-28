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
        <Route path='/contractor/upcoming-projects' element={<Contractor />} />
        <Route path='/contractor/past-bids' element={<Contractor />} />
        <Route path='/contractor/work-update' element={<Contractor />} />
        <Route path='/contractor/payment-progress' element={<Contractor />} />
        <Route path='/contractor/work-order' element={<Contractor />} />
        <Route path='/contractor/upload-invite' element={<Contractor />} />
        <Route path='/contractor/essage' element={<Contractor />} />
        </Routes>

    </>
  );
}

export default App;
