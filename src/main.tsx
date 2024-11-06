import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/GlobalStyle.ts'
import { GlobalStyle } from './styles/GlobalStyle.ts'
import Login from './pages/Login/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Login />
  </StrictMode>,
)
