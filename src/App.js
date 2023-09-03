import './App.css';
import Create from './component/create';
import Read from './component/read';
import Update from './component/update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='container'>
        <BrowserRouter >
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route path="read" element={<Read />} />
            <Route path="update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
