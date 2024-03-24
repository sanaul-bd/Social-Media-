
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


function App() {

  return (
    <div className='app-container'>
      <Sidebar />
      <div className='content'>
        <Header />
        <Footer />
      </div>
    </div>
  )
}

export default App
