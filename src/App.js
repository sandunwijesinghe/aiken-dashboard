import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
