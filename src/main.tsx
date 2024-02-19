import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeCustomization } from './theme'
import { store } from './store'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeCustomization>
        <Router basename="/">
          <App />
        </Router>
      </ThemeCustomization>
    </Provider>
  </React.StrictMode>,
)
