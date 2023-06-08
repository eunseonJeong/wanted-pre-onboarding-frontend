import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Header from '../componets/Header';
import Signup from '../pages/Signup';
import Todo from '../pages/Todo';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
