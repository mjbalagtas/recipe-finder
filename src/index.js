import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PromisePolyfill from 'promise-polyfill'
import { ChakraProvider } from '@chakra-ui/react'

if (!window.Promise) {
  window.Promise = PromisePolyfill
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
  )