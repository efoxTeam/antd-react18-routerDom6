import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.css'
import 'src/styles/index.css'
import router from 'src/router'
import {BrowserRouter, useRoutes} from 'react-router-dom'

const RouterApp = () => {
  const element = useRoutes(router)
  return element
}
const root = document.getElementById('emp-root')
root &&
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>,
  )
