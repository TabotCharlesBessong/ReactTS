
import React, { useEffect } from 'react'
import { Navbar, Sidebar } from '../components'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'

type Props = {}

const Home = (props: Props) => {
  const dispatch = useAppDispatch()
  const videos = useAppSelector((state) =>state.youtubeApp.videos)

  useEffect(()=>{
    dispatch(getHomePageVideos(false))
    console.log(videos,'videos')
    // console.log(getHomePageVideos(false))
  },[dispatch])
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