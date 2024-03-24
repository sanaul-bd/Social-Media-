
import { useState } from 'react'
import './App.css'
import CreatPost from './components/CreatPost/CreatPost'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PostList from './components/PostCard/PostList'
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  const [tab, seTab] = useState('')

  return (
    <div className='app-container'>
      <Sidebar tab={tab} setTab={seTab}/>
      <div className='content'>
        <Header />
        { tab === "Home" ? <PostList /> : <CreatPost /> }
        <Footer />
      </div>
    </div>
  )
}

export default App
