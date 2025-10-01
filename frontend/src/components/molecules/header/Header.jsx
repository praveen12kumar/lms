import React from 'react'
import {GraduationCap} from 'lucide-react'


const Header = () => {
  return (
    <div className='w-full bg-zinc-900 h-auto min-h-12 flex items-center absolute left-0 top-0 '>
        <div className="flex items-center justify-center gap-3 px-4 text-white">
            <GraduationCap className='size-8'/>
            <h1 className='text-2xl font-bold'>LMS</h1>
        </div>
    </div>
  )
}

export default Header