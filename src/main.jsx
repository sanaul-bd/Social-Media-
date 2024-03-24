

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux'
// import { store } from './app/store/store.jsx'

// bootstrap css import 
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='mx-4 my-1 main_root'>
      <App />
    </div>
);



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )
