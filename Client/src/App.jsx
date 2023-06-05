import { useState } from 'react'
import Home from './components/Home/Home'
import CreatePotion from './components/CreatePotion/CreatePotion'
import UpdatePotion from './components/UpdatePotion/UpdatePotion'
import logo from './images/potions.png'

function App() {
  const [page,setPage]=useState('home')
  const [id,setID]=useState('')
  const getContent=()=>{
    if (page==='home') {
      return <Home toPageUp={toPageUp}/>
    }else if(page==='create'){
      return <CreatePotion/>
    }else if(page==='update'){
      return <UpdatePotion id={id}/>
    }
  }
  const toPage = page=>e=>{
    e.preventDefault()
    window.history.pushState(null,"Create",`/${page}`)
    setPage(page)
  }
  const toPageUp=(page,id)=>e=>{
    e.preventDefault()
    console.log(id)
    window.history.pushState(null,"Create",`/${page}/${id}`)
    setPage(page)
    setID(id)
  }
  return (
    <div>
      <header className="grid grid-cols-3 bg-white h-14">
        <img src={logo} alt="img_not_fund" className='ml-4 w-14 h-14' />
        <button onClick={toPage("home")} className='rounded-lg shadow-lg bg-green-400 m-2 p-1 text-sm font-medium'>Home</button>
        <button onClick={toPage("create")} className='rounded-lg shadow-lg bg-blue-400 m-2 p-1 text-sm font-medium'>Create</button>
      </header>
      {getContent()}
    </div>
  )
}

export default App
