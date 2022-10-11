import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';
// add react router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/topics',
        element: <Topics></Topics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
  },
])
function App() {
  
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
