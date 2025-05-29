'use client'
import Link from "next/link"
import { useState } from "react"

export default function MenuOverlayComponent() {

  const [menuOpen, setMenuOpen] = useState(false)

  const handelCLicl = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <button onClick={handelCLicl} >
        <img src="/Subtract.svg" alt="Logo"  className="size-max max-h-36" />
      </button>
      {menuOpen && (
        <div onClick={handelCLicl} className="fixed top-0 left-0 w-full h-full bg-no-repeat bg-center bg-stone-950/75 flex justify-start animate-fade-in">
          <nav className=" p-4 rounded shadow-lg w-4xl text-4xl sm:text-6xl md:text-8xl border-indigo-600 flex  items-center justify-start">
            <ul className="space-y-2  h-full border-indigo-600 items-start flex flex-col justify-center gap-12">
              <li><Link href="/" className="text-white" >Home</Link></li> 
              <li><Link href="/" className="text-white" >About</Link></li> 
              <li><Link href="/" className="text-white" >Projects</Link></li> 
              <li><Link href="/" className="text-white" >Contact</Link></li> 
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
