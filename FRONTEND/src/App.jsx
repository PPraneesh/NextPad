import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import Root from './components/Root'  
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Article from './components/Article/Article'
import NewArticle from './components/NewArticle/NewArticle'
import UserProfile from './components/UserProfile/UserProfile'
import ModifyArticle from './components/ModifyArticle/ModifyArticle'


function App() {

  let route = createBrowserRouter([{
    path: '',
    element: <Root />,
    children: [
     {
      path: 'user-api',
      children:[
        {
          path: 'login',
          element: <Login />
         },
         {
          path: 'register',
          element: <Register />
         },
         {
          path:'home',
          element: <Home />
         },
         {
          path: 'home/:articleId',
          element: <Article />
         },
         {
          path: 'new-article',
          element: <NewArticle />
         },
         {
          path: 'user-profile',
          element: <UserProfile />
         },
         {
          path: 'user-profile/modify-article',
          element: <ModifyArticle />
         }
      ]
      }
    ]
  }])

  return (
    <RouterProvider router={route} />
  )
}

export default App
