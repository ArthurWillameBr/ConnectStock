import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { MainRoutes } from './router'
export function App() {

  return (
   <Router>
      <MainRoutes />
   </Router>
  )
}


