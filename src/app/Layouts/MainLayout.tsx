"use client"

import Navbar from "../components/Navbar"



function MainLayout({children }:any) {
  return (
    <div className=" max-w-[1200px] mx-auto bg-gray-900">
      <Navbar/>
        {children}
    </div>
  )
}

export default MainLayout