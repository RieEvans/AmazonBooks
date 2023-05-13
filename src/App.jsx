
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Booklist from './components/Booklist';

import "./App.css";

function App() {
  
  return (
    <>
      <div className="app">
        <BrowserRouter>
            <Routes>
              <Route path="/" Component = {Booklist}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
