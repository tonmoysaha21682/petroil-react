import { useState } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Supplier from './components/Supplier/Supplier'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header></Header>
  <Navbar></Navbar>
  <Banner></Banner>
  <Supplier></Supplier>
    </>
  )
}

export default App
