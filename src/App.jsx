import { useState } from "react";
import Footer from "./assets/components/Footer";
import Main from "./assets/components/Main";
import SideBar from "./assets/components/SideBar";


function App() {

  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
    console.log('Changed Modal')
  }

  return (
    <>
      <Main />
      {showModal && (
        <SideBar handleToggleModal={handleToggleModal} />
      )}
      <Footer  showModal={showModal} handleToggleModal={handleToggleModal} />
    </>  
  )
}

export default App
