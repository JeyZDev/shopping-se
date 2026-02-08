import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'
import MyCart from './MyCart'

const Page = () => {
    const page = useSelector((state) => state.pages)
  return (
    <div className="bg-[#1d232a] min-h-screen">{page.home ? <Home /> : <MyCart />}</div>
  )
}

export default Page