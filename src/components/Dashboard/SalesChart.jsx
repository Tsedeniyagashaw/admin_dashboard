import React from 'react'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'lucide-react'

const data = [
    {name:"Electronics", value: 45,color: "#3b82f6"},
    {name:"Clothing", value: 30, color: "#8b5cf6"},
    {name:"Books", value: 15, color:"#10b981"},
    {name: "Other", value: 10, color: "#f59e0b"}
]

const SalesChart = () => {
  return (
    <div className='bg-white dark:bg-slate-900
     backdrop-blur-xl rounded-2xl p-6 border
      border-slate-200/50 dark:border-slate-700/50'>
        <div className='mb-6'>
     <h3 className='text-lg font-bold
      text-slate-800 dark:text-white'>
        Sales by Category</h3>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
            Production Distribution
        </p>

        </div>

        <div className='h-80'>

        </div>
    
    </div>
  )
}

export default SalesChart
