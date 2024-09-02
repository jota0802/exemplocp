import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//importando rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'

//criando elementos

const router = createBrowserRouter([
  {
    //elemento pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //elementos filhos

    children:[
      {path:'/',element:<Home/>},
      {path:'/Produtos',element:<Produtos/>}

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
