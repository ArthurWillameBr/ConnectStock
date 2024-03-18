import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { MainRoutes } from './router'
import { StockContextProvider } from './contexts/StockContext'
export function App() {

  return (
   <Router>
    <StockContextProvider>
      <MainRoutes />
      </StockContextProvider>
   </Router>
  )
}


