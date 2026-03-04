import { RouterProvider } from 'react-router'
import { routes } from "./app.routes.jsx"
import FaceExpression from './features/Expression/components/FaceExpression'
import { AuthProvider } from './features/auth/auth.context'
import { SongContextProvider } from './features/home/song.context.jsx'

const App = () => {
  return (
    <AuthProvider>
      <SongContextProvider>
        <RouterProvider router={routes} />
      </SongContextProvider>
    </AuthProvider>
  )
}

export default App