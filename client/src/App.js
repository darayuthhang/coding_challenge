import { Routes, Route } from 'react-router-dom';
import Book from './page/Book';
import NotFound from './component/NotFound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route index element={<Book/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
