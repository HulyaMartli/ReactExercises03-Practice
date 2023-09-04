import './assets/styles/reset.css'
import './App.css'
import styles from "./assets/styles/NavFooter.module.css"
import { Logo } from './components/Logo'
import { NavMain } from './components/NavMain'
import { Page01 } from './pages/Page01'
import { Page02 } from './pages/Page02'
import { Routes, Route } from "react-router";


function App() {
  console.log("app runs")
  return(
    <>
    <header>
      <Logo/>
      <NavMain/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Page01/>} />
        <Route path="/members" element={<Page02/>} />
      </Routes>
    </main>
    <footer className={styles.NavFooter}></footer>
    </>
  )
  
}

export default App;
