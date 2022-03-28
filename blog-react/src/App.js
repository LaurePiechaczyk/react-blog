import Navbar from './Components/Navbar/Navbar';
import Home from "./Containers/Home/Home";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Article from "./Containers/Article/Article";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/write' element={<AddArticle />}></Route>
        <Route path='/articles/:slug' element={<Article />}></Route>
      </Routes>
    </>
  );
}

export default App;
