import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Topics from './components/Topics/Topics';
import Quizes from './components/Quizes/Quizes';
import Statistics from './components/Statistics/Statistics';

import Main from './layout/Main';
import Home from './components/Home/Home';
// add react router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: '/topics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics></Topics>,
      },
      {
        path: '/topics/:id',
      loader:  async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element: <Quizes></Quizes>
      },
      {
        path: '/statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
  },
  {
    path: '*',
    element: <div className='text-center mt-20'>
      <h1 className='text-6xl font-bold text-red-500'>error... 4O4</h1>
      <h2 className='text-3xl font-semi-bold text-gray-500'>Page Not Found</h2>
      <p className='text-lg font-medium text-gray-400'>please check your path..!</p>
    </div>
  }
])
function App() {
  
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
