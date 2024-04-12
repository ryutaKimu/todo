
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from './components/Example.jsx';
import Yeah from './components/Yeah.jsx';

function App() {


 return (
   <BrowserRouter>
   <Routes>
     <Route path={`/`} element={<Example/>} />
     <Route path={`/yeah`} element={<Yeah />} />
   </Routes>
   </BrowserRouter>
 );
}

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);
root.render(
 <App />
);