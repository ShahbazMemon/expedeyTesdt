import { BrowserRouter } from 'react-router-dom';
import Routers from "./routes/Routers";
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>

    </div>
  );
}

export default App;
