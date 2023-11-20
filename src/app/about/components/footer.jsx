import React from 'react'

export default function Footer() {
  return (
    <footer className=' bg-amber-600  flex items-center justify-center h-[20vh] '>
        <p>
            &copy; univelcity {new Date().getFullYear()}
        </p>
    </footer>
    
  )
}
