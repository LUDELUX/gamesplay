import {Route,Routes} from 'react-router'
import './App.css'
import Header from './components/Header/Header.jsx'
import Home from './components/home/Home.jsx'

function App() {
  

  return (
    <div id='box'>
      <Header/>

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
        
        </main>
    </div>
  )
}

export default App
