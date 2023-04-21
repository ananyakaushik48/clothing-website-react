import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './Canvas'
import './styles.css'
import Overlay from './Overlay'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App />
  <Overlay/>
  </> 
)
