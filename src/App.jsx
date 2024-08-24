import React, { useState } from 'react'
import homeBg from "./images/home-bg.jpg"
import homeDarkBg from "./images/home-dark-bg.jpg"
import Header from './components/Header'
import Content from './components/Content'

const App = () => {
  const [colorMode, setColorMode] = useState("light")

  function setAllColorMode(colorMode) {
    setColorMode(prev => prev === "light" ? "dark" : "light")
    if(colorMode !== "dark") {
      document.documentElement.classList.add("dark")
    }else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className='font-josefin min-h-[100vh] dark:bg-slate-900'>
      <img className='fixed top-0 left-0 right-0 z-[0] min-h-[170px] w-full object-cover' src={colorMode==="dark" ? homeDarkBg : homeBg} />
      <Header colorMode={colorMode} setAllColorMode={setAllColorMode} />
      <Content/>
    </div>
  )
}

export default App
