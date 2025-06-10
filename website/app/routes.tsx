import { type RouteObject } from 'react-router';
import Home from "./routes/_index"
import WasupPage from "./routes/wasup"

export const routes: RouteObject[] = [
  {
    path: '/',
    loader: async () => {
      return {}
    },
    element: <Home />,
  },
  {
    path: '/wasup',
    loader: async () => {
      return {}
    },
    element: <WasupPage />,
  },
]
