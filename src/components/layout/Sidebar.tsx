import React, { ReactElement } from 'react'

interface Props {
  
}

export default function Sidebar({}: Props): ReactElement {
  return (
    <div className="fixed bg-red-400  px-8 py-8 min-h-screen w-96 z-10"> 
      
      I'm side bar
    </div>
  )
}
