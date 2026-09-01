import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { install } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'
import './index.css'
import App from './App.jsx'


install({
  presets: [
    presetAutoprefix(),
    presetTailwind(),
  ],

  theme:{
    extend: {
      colors: {
        primary: '#3743a8',
        secondary: '#b3b4ff',
      },
    },
  },





})






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
