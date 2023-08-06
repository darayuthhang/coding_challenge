import { Routes, Route } from 'react-router-dom';
import Book from './page/Book';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
            <Route index element={<Book/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
