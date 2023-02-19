
import React from 'react'
import { Navbar, Sidebar } from '../components'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='max-h-screen overflow-hidden' >
      <div style={{height:'7.5vh'}} className="">
        <Navbar/>
      </div>
      <div style={{height:'92vh'}} className="flex">
        <Sidebar/>
      </div>
    </div>
  )
}

export default Home