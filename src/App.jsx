import './assets/styles/reset.css'
import './App.css'
import styles from "./assets/styles/NavFooter.module.css"
import { Logo } from './components/Logo'
import { NavMain } from './components/NavMain'
import { Page01 } from './pages/Page01'
import { Page02 } from './pages/Page02'
import { Routes, Route } from "react-router";
import { Page03 } from './pages/Page03'
import { Page04 } from './pages/Page04'


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
        <Route path="/quiz" element={<Page03 />} />
        <Route path="/accordion_panel" element={<Page04 />} />
      </Routes>
    </main>
    <footer className={styles.NavFooter}></footer>
    </>
  )
  
}

export default App;
