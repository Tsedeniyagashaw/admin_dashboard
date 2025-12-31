import { Zap } from 'lucide-react'
import img from '/jane.jfif'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50
    flex flex-col relative z-10 '>
    <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
    <div className='flex items-center space-x-3'>
        <div className='w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
         <Zap  className='w-6 h-6 text-white'/>
        </div>

        <div className='text-xl font-bold text-slate-800 dark:text-white'>
          <h1>Nexus</h1>
          <p className='text-xs text-slate-500 dark:text-slate-400'>Admin Panel</p>
        </div>

    </div>

    </div>

<nav className='flex-1 space-y-2 overflow-y-auto'>
</nav>


<div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
<div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
<img src={img} alt=""
className='w-10 h-10 rounded-full ring-2 ring-blue-500' />

<div className='flex-1 min-w-0'>
  <div className="flex-1 min-w-0">

    <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>Jane Jhonson</p>
    <p className='text-xs text-slate-500 dark:text-slate-400 truncate '>Administrator</p>
  
  </div>

</div>

</div>

</div>




    </div>
  )
}

export default Sidebar
//9:20