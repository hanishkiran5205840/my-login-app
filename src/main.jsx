import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FakeStoreProducts from './FakeStoreProducts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FakeStoreProducts />
  </StrictMode>,
)
