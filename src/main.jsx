import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import updateReducer from "./app/updateSlice.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/js/bootstrap.js'
//import 'bootstrap-icons/font/bootstrap-icons.css'

const store = configureStore({
  reducer: {
    update: updateReducer,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
  </StrictMode>,
)
