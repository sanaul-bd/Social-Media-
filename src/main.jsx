

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Provider } from 'react-redux'
// import { store } from './app/store/store.jsx'

// bootstrap css import 
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )
