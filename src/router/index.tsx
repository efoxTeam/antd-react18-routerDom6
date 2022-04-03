import {Spin} from 'antd'
import {lazy, ReactNode, Suspense} from 'react'
import {RouteObject} from 'react-router-dom'
import AppLayout from 'src/components/layout'

const Detail = lazy(() => import('src/pages/Detail'))
const Home = lazy(() => import('src/pages/Home'))
const Login = lazy(() => import('src/pages/Login'))
const User = lazy(() => import('src/pages/User'))
const Welcome = lazy(() => import('src/pages/Welcome'))

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<Spin />}>{children}</Suspense>
}
const router: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<Home />),
      },
    ],
  },
  {
    path: '/user',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<Home />),
      },
      {
        path: '/user/list',
        element: lazyLoad(<User />),
      },
      {path: '/user/detail/:id', element: lazyLoad(<Detail />)},
    ],
  },
  {path: '/login', element: lazyLoad(<Login />)},
]

export default router
